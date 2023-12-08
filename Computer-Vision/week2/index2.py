import cv2


# print(cv2.__version__)

img = cv2.imread('img/balloons.jpeg', 1)#1,0,-1 color,grey,

cv2.imshow('eiei', img)
 
while True:
    k = cv2.waitKey(0)#check key if another int which to millisecs display
    if k == ord('q'):
        break
    elif k == ord('s'):
        cv2.imwrite('eiei.jpeg', img)
cv2.destroyAllWindows()
