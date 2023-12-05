#label & button
from PyQt6.QtCore import QCoreApplication
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QPushButton


#design
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('JaimesJames Program')

        lb = QLabel('Hi Python', self)
        lb.move(150,0)

        btn = QPushButton('Click', self)
        btn.move(150, 50)

#run
app = QCoreApplication.instance()
if app is None:
    app = QApplication([])

window = MainWindow()
window.show()
app.exec()