var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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