/*Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.
Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".
Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".
Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
Try adjusting the age and executing the program to see how it will affect the output.
*/
var age = 10;
if (age > 65)
    console.log("You get your income from your pension");
else if (age <= 65 && age >= 18)
    console.log("Each month you get a salary");
else if (age < 18)
    console.log('You get an allowance');
else
    console.log("The value of the age variable is not numerical");
