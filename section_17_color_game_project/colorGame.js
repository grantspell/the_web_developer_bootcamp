var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // ADD INITIAL COLORS TO SQUARES
    squares[i].style.backgroundColor = colors[i];
    
    // ADD CLICK LISTENERS TO SQAURES
    squares[i].addEventListener("click", function(){
        // GRAB COLOR OF CLICKED SQUARE
        var clickedColor = this.style.backgroundColor;
        // COMPARE COLOR TO pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // LOOP THROUGH ALL SQUARES
    for(var i = 0; i < squares.length; i++) {
        // CHANGE EACH COLOR TO MATCH GIVEN COLOR
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // MAKE AN ARRAY
    var arr = []
    // REPEAT NUM TIMES
    for(var i = 0; i < num; i++) {
        // GET RANDOM COLOR, PUSH INTO ARRAY
        arr.push(randomColor());
    }
    // RETURN THAT ARRAY
    return arr;
}

function randomColor() {
    // PICK A "RED" FROM 0 - 255
    var r = Math.floor(Math.random() * 256);
    // PICK A "GREEN" FROM 0 - 255
    var g = Math.floor(Math.random() * 256);
    // PICK A "BLUE" FROM 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};