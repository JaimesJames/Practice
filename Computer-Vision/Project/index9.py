import cv2
import numpy as np
import matplotlib.pyplot as plt

# Load the image
image = cv2.imread('test.png')

# Get the dimensions of the image
height, width, _ = image.shape

# Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Threshold the image to find white regions
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

# Find contours in the thresholded image
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Iterate through the contours
for contour in contours:
    # Get the area of each contour
    area = cv2.contourArea(contour)

    # Set a threshold for minimum area to filter out small contours
    min_area_threshold = int(min(height, width) * 0.01)  # Adjust this value based on your requirement

    if area > min_area_threshold:
        # Draw a bounding box around the contour
        ox, oy, ow, oh = cv2.boundingRect(contour)

        #Resize the bounding box based on the dimensions of the image
        x = int(ox * width / image.shape[1])
        y = int(oy * height / image.shape[0])
        w = int(ow * width / image.shape[1])
        h = int(oh * height / image.shape[0])

        

        roi = image[y:y+h, x:x+w]
        # Convert the image to grayscale
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Perform Harris Corner Detection
        corners = cv2.cornerHarris(gray, blockSize=2, ksize=3, k=0.04)

        # Dilate the corners to make them more visible
        corners = cv2.dilate(corners, None)

        # Set a threshold for detecting corners
        threshold = 0.1 * corners.max()

        # Find coordinates of corners above the threshold
        corner_coordinates = np.argwhere(corners > threshold)

        # Draw circles at the corner coordinates
        for coords in corner_coordinates:
            cv2.circle(image, (coords[1], coords[0]), 3, (0, 255, 0), 2)
            print(coords)

        # Display the result with marked corners
        cv2.imshow('Corners Detected', image)
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        # Crop the region of interest (ROI)
        

        # Display the cropped image
        rows,cols,ch = roi.shape
        pts1 = np.float32([[0,0],[w,0],[w,h],[0,h]])
        pts2 = np.float32([[0,0],[w,-corner_coordinates[1][1]],[w,h],[0,h]])
        M = cv2.getPerspectiveTransform(pts1, pts2)
        dst = cv2.warpPerspective(roi, M, (w,h))
        plt.subplot(121),plt.imshow(roi),plt.title('Input')
        plt.subplot(122),plt.imshow(dst),plt.title('Output')
        plt.show()
        cv2.imshow('Cropped White Square Area', roi)
        cv2.waitKey(0)

# Display the result with bounding box
cv2.destroyAllWindows()