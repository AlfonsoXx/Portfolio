// Prompt user for numbers and convert them to numbers
var number1 = Number(prompt('Type in a number.'))
var number2 = Number(prompt("Provide another number."))
var number3 = Number(prompt("Give another number!"))
var numbers = [number1, number2, number3];

// Call the function and store the result
const results = sumAll(numbers)

function sumAll(numbers){
    let sum = 0; 
    for(let i = 0; i < numbers.length; i++ ) {
    sum += numbers[i];
    }
    return sum;
}

//Output results on Page
document.write("The sum of all of your numbers is " + results );