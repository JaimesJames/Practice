import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# สร้างข้อมูลตัวอย่าง
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # ตัวแปร independent (feature)
y = np.array([2, 3, 4, 5, 6])  # ตัวแปร dependent (target)

# สร้างแบบจำลอง Linear Regression
model = LinearRegression()

# ฝึกแบบจำลองด้วยข้อมูล
model.fit(X, y)

# ทำนายค่า y สำหรับข้อมูล X ทั้งหมด
y_pred = model.predict(X)

# พล็อตข้อมูลจริง
plt.scatter(X, y, color='blue', label='Actual data')

# พล็อตเส้นตรงที่ทำนายได้
plt.plot(X, y_pred, color='red', label='Linear regression')

# กำหนดค่าแกน
plt.xlabel('X')
plt.ylabel('y')

# เพิ่มคำอธิบายกราฟ
plt.title('Linear Regression Example')
plt.legend()

# แสดงกราฟ
plt.show()