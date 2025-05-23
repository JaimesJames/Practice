import cv2
import numpy as np
#target is the image we search in
target = cv2.imread('img/test01.jpg')
hsvt = cv2.cvtColor(target, cv2.COLOR_BGR2HSV)
#roi is the object or region of object we need to find
r = 60; h = 60; c = 180; w = 40
roi = target[r:r+h, c:c+w]
hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV) 
#hsv = hsvt[r:r+h, c:c+w]
# calculating object histogram
roihist = cv2.calcHist([hsv], [0,1], None, [180,256], [0,180, 0,256] )
# normalize histogram and apply backprojection
cv2.normalize(roihist, roihist, 0, 255, cv2.NORM_MINMAX)
dst = cv2.calcBackProject([hsvt], [0,1], roihist, [0,180,0,256], 1)
# Now convolute with circular disc
disc = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,5)) 
cv2.filter2D(dst, -1, disc, dst)
# threshold and binary AND
ret,thresh = cv2.threshold(dst, 50, 255, 0)
thresh = cv2.merge((thresh,thresh,thresh))
res = cv2.bitwise_and(target, thresh)
#draw a rectangle of ROI
targetROI = cv2.rectangle(target,(c,r),(c+w,r+h),(0,255,0),2)
res = np.vstack((target,thresh,res))
cv2.imshow('res_opencv', res) 
cv2.imwrite('test01half_histBackproject_opencv.jpg', res)