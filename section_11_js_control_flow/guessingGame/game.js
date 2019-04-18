// CREATE RANDOM NUMBER AND ASSIGN IT TO answerNumber
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var answerNumber = getRandomInt(0, 100);

// ASK USER FOR GUESS
var userNumber = Number(prompt("Guess a number!"));

// CHECK GUESS : INCORRECT
while (userNumber !== answerNumber) {
    if (userNumber < answerNumber) {
        userNumber = Number(prompt("Ehhh.. That's too low. Guess again!"))
    }
    else if (userNumber > answerNumber) {
        userNumber = Number(prompt("AHH! That's too high. Guess again!"))
    }
};

// CHECK GUESS : CORRECT
if (userNumber === answerNumber) {
    alert("Congratulations! You guessed the correct number " + answerNumber + "!");
}