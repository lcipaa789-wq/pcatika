# while loop = execute some code WHILE some condition remains true

name = input("Enter your name: ")


while name == "":
    print("You didnt enter your name")
    name= input("Enter your name: ")


print(f"Hello {name}")