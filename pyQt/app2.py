#windows in class form

from PyQt6.QtWidgets import QApplication, QWidget
from PyQt6.QtCore import QCoreApplication

#design
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('JaimesJames Program')

#run
app = QCoreApplication.instance()
if app is None:
    app = QApplication([])

window = MainWindow()
window.show()
app.exec()