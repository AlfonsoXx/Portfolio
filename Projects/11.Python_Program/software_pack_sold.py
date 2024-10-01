#Program status: Completed
#Program does: calculates total price for quantity of software packages sold including discount.


SOFTWARE_PACKAGE = 149
DISCOUNT10 = .10
DISCOUNT20 = .20
DISCOUNT30 = .30
DISCOUNT40 = .40


quantity_amount = int(input ("Enter the number of packages purchased:"))

if quantity_amount > 1 and quantity_amount < 10:
    print ("Discount amount: $ 0")
    print ("Total Amount: $",(quantity_amount * 149 ))
    
elif quantity_amount >= 10 and quantity_amount < 49:
    discountAmount = float(format (DISCOUNT10 * (SOFTWARE_PACKAGE * quantity_amount), '.2f'))
    totalCostWDiscount = float((SOFTWARE_PACKAGE * quantity_amount) - discountAmount)
    print ("Discount amount: $", discountAmount)
    print ("Total Amount: $", (totalCostWDiscount ))
    
elif quantity_amount >= 50 and quantity_amount < 99:
    discountAmount = float(format (DISCOUNT20 * (SOFTWARE_PACKAGE * quantity_amount), '.2f'))
    totalCostWDiscount = float((SOFTWARE_PACKAGE * quantity_amount) - discountAmount)
    print ("Discount amount: $", discountAmount)
    print ("Total Amount: $", (totalCostWDiscount ))
    
elif quantity_amount >= 100 and quantity_amount < 149:
   discountAmount = float(format (DISCOUNT30 * (SOFTWARE_PACKAGE * quantity_amount), '.2f'))
   totalCostWDiscount = float((SOFTWARE_PACKAGE * quantity_amount) - discountAmount)
   print ("Discount amount: $", discountAmount)
   print ("Total Amount: $", (totalCostWDiscount ))
    
elif quantity_amount >= 150:
   discountAmount = float(format (DISCOUNT40 * (SOFTWARE_PACKAGE * quantity_amount), '.2f'))
   totalCostWDiscount = float((SOFTWARE_PACKAGE * quantity_amount) - discountAmount)
   print ("Discount amount: $", discountAmount)
   print ("Total Amount: $", (totalCostWDiscount ))
   
