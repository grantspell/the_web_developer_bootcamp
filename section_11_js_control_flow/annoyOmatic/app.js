var userInput = "";

while( userInput != "yes" || userInput != "yeah" ){
    userInput = prompt("Are we there yet?")
    if( userInput == "yes" || userInput == "yeah" ){
        alert("Yay, we finally made it!")
    };
};