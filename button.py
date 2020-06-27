from tkinter import *

root = Tk()

def myClick():
    myLabel = Label(root, text="Look! My button works")
    myLabel.pack()

myButton = Button(root, text="Click Me!", padx=25, command=myClick)

myButton.pack()


root.mainloop()