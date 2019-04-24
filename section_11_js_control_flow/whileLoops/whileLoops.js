// PROBLEM ONE
// Print all numbers beteen -10 and 19
var num = -10;

while( num <= 19 ) {
    console.log(num);
    num++;
};

// PROBLEM TWO
// Print all even numbers between 10 and 40
var num = 10;

while ( num >= 10 && num <= 40 ){
    if( num % 2 === 0 ) {
        console.log(num);
    };
    num++;
};

// PROBLEM THREE
// Print all odd numbers between 300 and 333
var num = 300;

while ( num >= 300 && num <= 333 ) {
    if(num % 2 !== 0) {
        console.log(num);
    };
    num++;
};

// PROBLEM FOUR
// Print all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;

while ( num >= 5 && num <= 50 ) {
    if( num % 5 == 0 && num % 3 == 0 ){
        console.log(num);
    }
    num++;
};