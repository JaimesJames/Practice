import cv2
import numpy as np
img = cv2.imread('img/balloons.jpeg')
balloon = img[5:115, 115:200]
img2 = img.copy()
img2[15:125, 230:315] = balloon
img2[0:110, 350:435] = balloon
img2[30:140, 500:585] = balloon
cv2.imshow('bgr image',img2) # expects true color
cv2.waitKey(0)
cv2.destroyAllWindows()