# import the necessary packages
from collections import deque
from imutils.video import VideoStream
import numpy as np
import argparse
import cv2
import imutils
import time
from sklearn.linear_model import LinearRegression

# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-v", "--video",
	help="path to the (optional) video file")
ap.add_argument("-b", "--buffer", type=int, default=32,
	help="max buffer size")
args = vars(ap.parse_args())

# define the lower and upper boundaries of the "green"
# ball in the HSV color space
greenLower = (29, 86, 6)
greenUpper = (64, 255, 255)
# initialize the list of tracked points, the frame counter,
# and the coordinate deltas
pts = deque(maxlen=args["buffer"])
counter = 0
(dX, dY) = (0, 0)
direction = ""
# if a video pat

tx = deque(maxlen=args["buffer"])
ty = deque(maxlen=args["buffer"])

prrr = None

#  was not supplied, grab the reference
# to the webcam
if not args.get("video", False):
	vs = VideoStream(src=1).start()
# otherwise, grab a reference to the video file
else:
	vs = cv2.VideoCapture(args["video"])
# allow the camera or video file to warm up
time.sleep(2.0)

# keep looping
while True:
	# grab the current frame
	frame = vs.read()
	# handle the frame from VideoCapture or VideoStream
	frame = frame[1] if args.get("video", False) else frame
	# if we are viewing a video and we did not grab a frame,
	# then we have reached the end of the video
	# if frame is None:
	# 	prrr = None
	# 	continue
	# resize the frame, blur it, and convert it to the HSV
	# color space
	frame = imutils.resize(frame, width=600)
	blurred = cv2.GaussianBlur(frame, (11, 11), 0)
	hsv = cv2.cvtColor(blurred, cv2.COLOR_BGR2HSV)
	# construct a mask for the color "green", then perform
	# a series of dilations and erosions to remove any small
	# blobs left in the mask
	mask = cv2.inRange(hsv, greenLower, greenUpper)
	mask = cv2.erode(mask, None, iterations=2)
	mask = cv2.dilate(mask, None, iterations=2)
	# find contours in the mask and initialize the current
	# (x, y) center of the ball
	cnts = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL,
		cv2.CHAIN_APPROX_SIMPLE)
	cnts = imutils.grab_contours(cnts)
	center = None

    	# only proceed if at least one contour was found
	if len(cnts) > 0:
		# find the largest contour in the mask, then use
		# it to compute the minimum enclosing circle and
		# centroid
		c = max(cnts, key=cv2.contourArea)
		((x, y), radius) = cv2.minEnclosingCircle(c)
		M = cv2.moments(c)
		center = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"]))
		# only proceed if the radius meets a minimum size
		if radius > 10:
			# draw the circle and centroid on the frame,
			# then update the list of tracked points
			cv2.circle(frame, (int(x), int(y)), int(radius),
				(0, 255, 255), 2)
			cv2.circle(frame, center, 5, (0, 0, 255), -1)
			pts.appendleft(center)
	else:
		pts.appendleft(center)	

# loop over the set of tracked points
	for i in np.arange(1, len(pts)):
		# if either of the tracked points are None, ignore
		# them
		if pts[i - 1] is None or pts[i] is None:
			continue
		# check to see if enough points have been accumulated in
		# the buffer
		if counter >= 10 and i == 1 and pts[-10] is not None:
			# compute the difference between the x and y
			# coordinates and re-initialize the direction
			# text variables
			dX = pts[-10][0] - pts[i][0]
			dY = pts[-10][1] - pts[i][1]
			(dirX, dirY) = ("", "")
			
			# print(pts, pts[-10])
			tx.appendleft(dX)
			ty.appendleft(dY)
			print(tx,ty)
			
			ttx = np.array(tx)
			tty = np.array(ty)

			ttx = ttx.reshape(-1, 1)

			# สร้างและฟิตโมเดล Linear Regression
			model = LinearRegression()
			model.fit(ttx, tty)

			# ดึงค่าความชัน (slope) และค่าตัดแกน y (intercept)
			slope = model.coef_[0]
			intercept = model.intercept_

			# พิมพ์ค่าความชันและค่าตัดแกน y
			print(f"Slope: {slope}, Intercept: {intercept}")

			# ทำนายค่า y จาก x
			predicted_y = model.predict(ttx)

			# พิมพ์ค่า y ที่ทำนายได้
			print("Predicted y:", predicted_y)
			# prrr = predicted_y

			if not(predicted_y is None or len(predicted_y) < 2):
				
				# print(prrr[0])
				if predicted_y[0]*-1>(predicted_y[1]*-1)+25 and prrr == None:
					cv2.circle(frame, pts[i-1], 50, (255,0,0), -1)
					prrr = pts[1]
					predicted_y = None


			if np.abs(dX) > 20:
				dirX = "East" if np.sign(dX) == 1 else "West"
			# ensure there is significant movement in the
			# y-direction
			if np.abs(dY) > 20:
				dirY = "North" if np.sign(dY) == 1 else "South"
			# handle when both directions are non-empty
			if dirX != "" and dirY != "":
				direction = "{}-{}".format(dirY, dirX)
			# otherwise, only one direction is non-empty
			else:
				direction = dirX if dirX != "" else dirY

		# otherwise, compute the thickness of the line and
		# draw the connecting lines
		thickness = int(np.sqrt(args["buffer"] / float(i + 1)) * 2.5)
		
		
		cv2.line(frame, pts[i - 1], pts[i], (0, 0, 255), thickness)
		if not(prrr is None):
			cv2.circle(frame, prrr, 50, (255,0,0), -1)
			if i ==31:
				prrr = None
			# continue
		# # print(prrr[0])
		# if prrr[0]*-1>(prrr[1]*-1)+25:
		# 	cv2.circle(frame, pts[i-1], 50, (255,0,0), -1)
		# 	prrr = None
			
	# show the movement deltas and the direction of movement on
	# the frame
	cv2.putText(frame, direction, (10, 30), cv2.FONT_HERSHEY_SIMPLEX,
		0.65, (0, 0, 255), 3)
	# cv2.putText(frame, prrr, (10, 30), cv2.FONT_HERSHEY_SIMPLEX,
	# 	0.65, (0, 0, 255), 3)
	# print(prrr)
	cv2.putText(frame, "dx: {}, dy: {}".format(dX, dY),
		(10, frame.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX,
		0.35, (0, 0, 255), 1)
	
	# show the frame to our screen and increment the frame counter
	cv2.imshow("Frame", frame)
	key = cv2.waitKey(1) & 0xFF
	counter += 1
	# if the 'q' key is pressed, stop the loop
	if key == ord("q"):
		break
# if we are not using a video file, stop the camera video stream
if not args.get("video", False):
	vs.stop()
# otherwise, release the camera
else:
	vs.release()
# close all windows
cv2.destroyAllWindows()
