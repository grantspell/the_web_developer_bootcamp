var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // ADD CLICK LISTENERS TO SQAURES
        squares[i].addEventListener("click", function () {
            // GRAB COLOR OF CLICKED SQUARE
            var clickedColor = this.style.backgroundColor;
            // COMPARE COLOR TO pickedColor
            if (clickedColor === pickedColor) {
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
}

function reset() {
    // GENERATE ALL NEW COLORS
    colors = generateRandomColors(numOfSquares);
    // PICK NEW RANDOM COLOR FROM ARRAY
    pickedColor = pickColor();
    // CHANGE colorDisplay TO MATCH pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    // CHANGE COLORS OF SQUARES
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    // LOOP THROUGH ALL SQUARES
    for (var i = 0; i < squares.length; i++) {
        // CHANGE EACH COLOR TO MATCH GIVEN COLOR
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // MAKE AN ARRAY
    var arr = []
    // REPEAT NUM TIMES
    for (var i = 0; i < num; i++) {
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