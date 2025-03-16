import cv2
import numpy as np

# Load the image
image = cv2.imread('tw.png')

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
# image = image[]
cv2.imshow('Corners Detected', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
