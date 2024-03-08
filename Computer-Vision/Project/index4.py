import cv2
import numpy as np

# Function to detect the green ball in the frame
def detect_green_ball(frame, prev_frame):
    # Convert the frames to HSV
    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    hsv_prev_frame = cv2.cvtColor(prev_frame, cv2.COLOR_BGR2HSV)

    # Define the lower and upper boundaries for the green color
    lower_green = np.array([40, 40, 40])
    upper_green = np.array([80, 255, 255])

    # Threshold the frames to extract the green ball
    mask_frame = cv2.inRange(hsv_frame, lower_green, upper_green)
    mask_prev_frame = cv2.inRange(hsv_prev_frame, lower_green, upper_green)

    # Compute the absolute difference between the current and previous frames
    frame_diff = cv2.absdiff(mask_prev_frame, mask_frame)

    # Apply thresholding to highlight the differences
    _, thresh = cv2.threshold(frame_diff, 30, 255, cv2.THRESH_BINARY)

    # Find contours in the thresholded image
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Iterate through contours to find the green ball
    for contour in contours:
        # Calculate the area of the contour
        area = cv2.contourArea(contour)

        # Set a threshold for contour area to filter out small noise
        if area > 100:
            # Get the bounding box of the contour
            x, y, w, h = cv2.boundingRect(contour)

            # Draw a rectangle around the detected object
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            # Print a message when the green ball hits the wall (you can replace this with your own logic)
            if x == 0 or x + w == frame.shape[1]:
                print("Green ball hit the wall!")

    return frame

# Open a video capture object
cap = cv2.VideoCapture(0)  # Use 0 for the default camera

# Read the first frame
ret, prev_frame = cap.read()

while True:
    # Read the current frame
    ret, frame = cap.read()

    # Check if the frame is successfully read
    if not ret:
        break

    # Detect the green ball in the frame
    result_frame = detect_green_ball(frame, prev_frame)

    # Display the result
    cv2.imshow('Result', result_frame)

    # Break the loop if 'Esc' key is pressed
    if cv2.waitKey(30) & 0xFF == 27:
        break

    # Update the previous frame for the next iteration
    prev_frame = frame

# Release the video capture object and close all windows
cap.release()
cv2.destroyAllWindows()
