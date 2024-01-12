import cv2
import numpy as np
cap = cv2.VideoCapture(0)
while(1):
    # Take each frame
    _, frame = cap.read()
    # Convert BGR to HSV
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    # define range of blue color in HSV
    lower_1 = np.array([0,128,150]) 
    upper_1 = np.array([30,255, 255])

    lower_2 = np.array([100,128,150]) 
    upper_2 = np.array([130,255,255])

    
    # Threshold the HSV image to get only blue colors
    mask1 = cv2.inRange(hsv, lower_1, upper_1)
    mask2 = cv2.inRange(hsv, lower_2, upper_2)
    masks = cv2.bitwise_or(mask1,mask2)
    # Bitwise-AND mask and original image
    res = cv2.bitwise_and(frame, frame, mask= masks)
    cv2.imshow('frame', frame)
    cv2.imshow('mask', masks)
    cv2.imshow('res', res)
    k = cv2.waitKey(5) & 0xFF
    if k == 27:
        break
cv2.destroyAllWindows()