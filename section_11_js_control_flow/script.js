alert("PLEASE HAVE ID READY AT THE DOOR! - Ellie [venue staff]");

var age = Number(prompt("What is your age? I'm asking because I'm the bouncer. - Bouncer Bill"));

if(age < 0) {
    console.log("Error! Please enter valid age.");
    alert("Error! Please enter valid age.");
}

if(age < 18){
    console.log("Sorry, you are not old enough to enter the venue. Try again when you're 18, kid. - Bouncer Bill")
    alert("Sorry you are not old enough to enter the venue. Try again when you're 18, kid. - Bouncer Bill");
}

if(age === 21) {
    console.log("Happy Twenty-First Birthay! Here's a free drink ticket. - Bouncer Bill");
    alert("Happy Twenty-First Birthay! Here's a free drink ticket. - Bouncer Bill");
}

if(age % 2 !== 0) {
    console.log("Your age is an odd number... Cool! - Bouncer Bill");
    alert("Your age is an odd number... Cool! - Bouncer Bill");
}

if(age % Math.sqrt(age) === 0 ) {
   console.log("Your age is a perfect square... *looks you up and down* ... let's hope you aren't. - Bouncer Bill") 
   alert("Your age is a perfect square... *looks you up and down* ... let's hope you aren't. - Bouncer Bill") 
}

else if(age >= 18 && age < 21) {
    console.log("You can enter, but stay away from the bar, amigo! - Bouncer Bill");
    alert(age + " huh? You can enter, but stay away from the bar, amigo! - Bouncer Bill");
}

else if(age >= 21) {
    console.log("Come on in. " + age + " year olds are allowed to get SLOSHED here! - Bouncer Bill");
    alert("Come on in. " + age + " year olds are allowed to get SLOSHED here! - Bouncer Bill");
}