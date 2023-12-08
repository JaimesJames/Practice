import cv2
from matplotlib import pyplot as plt

img = cv2.imread('img/balloons.jpeg', 1)
# plt.imshow(img, cmap = 'color', interpolation = 'bicubic')
# plt.xticks([]), plt.yticks([])
b,g,r = cv2.split(img)
img2 = cv2.merge([r,g,b])


plt.subplot(121);plt.imshow(img) # expects distorted color
plt.subplot(122);plt.imshow(img2) # expect true color
plt.show()
cv2.imshow('bgr image',img) # expects true color
cv2.imshow('rgb image',img2) # expects distorted color
cv2.waitKey(0)
cv2.destroyAllWindows()