// PROBLEM ONE
// isEven();
// Write a function isEven() which takes in a single numeric arguement and returns true if the number is true, and false otherwise
var num = prompt("Enter a number!");

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

alert(isEven(num));

// PROBLEM TWO
// factorial();
// Write a function factorial() which takes a single numeric argument and returs the factorial of that number
// var num = prompt("Enter a numer!");
var factors = [];

function factorial(num) {
    if(num == 0 || num == 1) 
        return 1;
    if(factors[num] > 0) 
        return factors[num];
    return factors[num] = factorial(num -1) * num;        
    
};

alert(factorial(num));

// PROBLEM THREE
// kebabToSnake();
// Write a function kebabToSnake() which takes in a single kebabe-cased string arguments and returns the snake_case version
var userInput = prompt("Please enter a kebab-cased string argument!")

function kebabToSnake(userInput) {
    var snakeCase = userInput.split("-").join("_").toLowerCase();
    return snakeCase;
}

alert(kebabToSnake(userInput));