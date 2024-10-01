#Simple Programs
#Program status: Completed
#what the program does: Calculates servings to make spaghetti sauce. 

ONE_SERVING_TOMATO_SAUCE = 2.0 /4
ONE_SERVING_TOMATO_PASTE = .333 /4
ONE_SERVING_CLOVES_GARLIC = 2 /4
ONE_SERVING_OREGANO = 1 /4
Serving_Amount = ("How many sevings do you want to make: ")


Serving_Amount = int(input ("How many sevings do you want to make: "))
new_tomato_sauce_serving = format ((Serving_Amount * ONE_SERVING_TOMATO_SAUCE), '.2f' )
new_tomato_paste_serving = format ((Serving_Amount * ONE_SERVING_TOMATO_PASTE), '.2f')
new_cloves_garlic= format ((Serving_Amount * ONE_SERVING_CLOVES_GARLIC), '.2f')
new_oregano = format ((Serving_Amount * ONE_SERVING_OREGANO), '.2f')


print ("To make", (Serving_Amount), "serving of spaghetti suace, you will need:")
print (new_tomato_sauce_serving, "cups of tomato sauce.")
print (new_tomato_paste_serving, "cups of tomato paste.")
print (new_cloves_garlic, "Cloves of garlic")
print (new_oregano, "tablespoon of oregano")

