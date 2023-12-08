import numpy as np
import cv2
# Create a black image
img = np.zeros((512,512,3), np.uint8)
# Draw a diagonal blue line with thickness of 5 px
img = cv2.line(img, (0,0), (511,511), (255,0,0), 5)
# Draw a green rectangle at the top-right corner of image
img = cv2.rectangle(img, (384,0), (510,128), (0,255,0), 3)
# Draw a circle inside the rectangle drawn above.
img = cv2.circle(img, (447,63), 63, (0,0,255), -1)
# Draws a half ellipse at the center of the image.
#img = cv2.ellipse(img, (256,256), (100,50), 0, 0,180, 255, -1)
img = cv2.ellipse(img, (256,256), (100,50), 0, 0,180, (255,0,0), -1)
# Draw a small polygon of with four vertices in yellow color
pts = np.array([[10,5],[20,30],[70,20],[50,10]], np.int32)
pts = pts.reshape((-1,1,2))
img = cv2.polylines(img,[pts],True,(0,255,255))
#img = cv2.polylines(img,[pts],False,(0,255,255))
# Write 'OpenCV' on the image in white color
font = cv2.FONT_HERSHEY_SIMPLEX 
cv2.putText(img, 'OpenCV', (10,500), font, 4,(255,255,255), 2, cv2.LINE_AA)
cv2.imshow('Drawing on an image',img)
cv2.waitKey(0)
cv2.destroyAllWindows()