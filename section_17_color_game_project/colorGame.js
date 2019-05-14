var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    // GENERATE ALL NEW COLORS
    colors = generateRandomColors(numOfSquares);
    // PICK NEW RANDOM COLOR FROM ARRAY
    pickedColor = pickColor();
    // CHANGE colorDisplay TO MATCH pickedColor
    colorDisplay.textContent = pickedColor;
    // CHANGE COLORS OF SQUARES
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

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
            resetButton.textContent = "Play Again?";
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