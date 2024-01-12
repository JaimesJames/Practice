import cv2
import numpy as np
from matplotlib import pyplot as plt

def nothing():
    pass

cv2.namedWindow('res')
cv2.createTrackbar('logo','res',0,100,nothing) 
cv2.createTrackbar('balloon','res',0,100,nothing) 

x = np.uint8([250])
y = np.uint8([10])

img1 = cv2.imread('img/balloons_431_490.jpeg')
img2 = cv2.imread('img/opencv_logo_original.jpg')

rows,cols,channels = img2.shape
roi = img1[0:rows, 0:cols ]
# Now create a mask of logo and create its inverse mask also
img2gray = cv2.cvtColor(img2,cv2.COLOR_BGR2GRAY)
ret, mask = cv2.threshold(img2gray, 10, 255, cv2.THRESH_BINARY)
mask_inv = cv2.bitwise_not(mask)
# Now black-out the area of logo in ROI
img1_bg = cv2.bitwise_and(roi,roi,mask = mask_inv)
# Take only region of logo from logo image.
img2_fg = cv2.bitwise_and(img2,img2,mask = mask)
# Put logo in ROI and modify the main image
dst = cv2.add(img1_bg,img2_fg)





while (1):
    
    k = cv2.waitKey(1) & 0xFF 
    if k == 27:
        break
    
    
    
    r = cv2.getTrackbarPos('logo','res')
    b = cv2.getTrackbarPos('balloon','res')
    result = cv2.addWeighted(img1,1-b/100,dst,r/100,0)
    cv2.imshow('res',result)

cv2.destroyAllWindows()