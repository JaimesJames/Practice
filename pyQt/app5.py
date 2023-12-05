#vertical box layout
from PyQt6.QtCore import QCoreApplication
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QHBoxLayout


#design
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('JaimesJames Program')

        #Layout
        hbox = QHBoxLayout(self)
        self.setLayout(hbox)

        btn1 = QPushButton('1')
        btn2 = QPushButton('2')
        btn3 = QPushButton('3')

        #add widget in layout
        hbox.addWidget(btn1)
        hbox.addWidget(btn2)
        hbox.addWidget(btn3)

#run
app = QCoreApplication.instance()
if app is None:
    app = QApplication([])

window = MainWindow()
window.show()
app.exec()