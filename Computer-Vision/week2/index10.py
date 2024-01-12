import cv2
import numpy as np

drawing = False # true if mouse is pressed
mode = True # if True, draw rectangle. Press 'm' to toggle to circle
ix,iy = -1,-1
drawed_x = []
drawed_y = []
# mouse callback function
def draw_circle(event,x,y,flags,param):
    global ix,iy,drawing,mode
    if event == cv2.EVENT_LBUTTONDOWN:
        drawing = True
        ix,iy = x,y
    elif event == cv2.EVENT_MOUSEMOVE:
        if drawing == True:
            if mode == True:
                for i in drawed_x:
                    for j in drawed_y:
                        if i == ix and j == iy:
                            drawed_x.remove(ix)
                            drawed_y.remove(iy)
                            print('tedt')
                            cv2.rectangle(img,(ix,iy),(x,y),(0,0,0),-1)
                        else:
                            drawed_x.append(ix)
                            drawed_y.append(iy)
                            cv2.rectangle(img,(ix,iy),(x,y),(0,255,0),-1)

                
            else:
                cv2.circle(img,(x,y),5,(0,0,255),-1)

    elif event == cv2.EVENT_LBUTTONUP:
        drawing = False
        if mode == True:
            cv2.rectangle(img,(ix,iy),(x,y),(0,255,0),-1)
        else:
            cv2.circle(img,(x,y),5,(0,0,255),-1)

img = np.zeros((512,512,3), np.uint8)
cv2.namedWindow('image')
cv2.setMouseCallback('image',draw_circle)
while(1):
    cv2.imshow('image',img)
    k = cv2.waitKey(1) & 0xFF
    if k == ord('m'):
        mode = not mode
    elif k == 27: # key ESC
        break
cv2.destroyAllWindows()