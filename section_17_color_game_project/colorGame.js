var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

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
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    });
}