// PROBLEM ONE
// isEven();
// Write a function isEven() which takes in a single numeric arguement and returns true if the number is true, and false otherwise
var num = prompt("Enter a number!");

function isEven(num) {
    return num % 2 === 0;
};

alert(isEven(num));

// PROBLEM TWO
// factorial();
// Write a function factorial() which takes a single numeric argument and returs the factorial of that number
// var num = prompt("Enter a numer!");
var num = prompt("Enter a whole digit number to determins its factorial!")

function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num ; i++) {
        result *= i;
    }
    return result;
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