#vertical box layout
from PyQt6.QtCore import QCoreApplication
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QGridLayout


#design
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('JaimesJames Program')

        #Layout
        grid = QGridLayout(self) 
        # self.setLayout(grid) #can use only self Grid

        btn1 = QPushButton('1')
        btn2 = QPushButton('2')
        btn3 = QPushButton('3')
        btn3 = QPushButton('4')

        #add widget in layout
        
        grid.addWidget(btn1, 0, 0)
        grid.addWidget(btn2, 1, 1)

#run
app = QCoreApplication.instance()
if app is None:
    app = QApplication([])

window = MainWindow()
window.show()
app.exec()