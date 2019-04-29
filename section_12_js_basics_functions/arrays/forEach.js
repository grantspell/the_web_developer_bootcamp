function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {
        // call func for each item in array
        func(arr[i]);
    }
};

// var colors = ["red", "green", "blue"];
// myForEach(colors, alert);
// returns an in-browser alert for each color

// using anonymous function

// myForEach(colors, function(){alert(color)
// console.log(color);
// });
// returns each color, on separate lines, in the console

// Using Array.prototype
// Array.prototype.myForEach(function (func) {
//     for (var i = 0; i < this.length; i++) {
//         for (this[i]);
//     }
// });

// var friends = ["Annie", "Kaylan", "Grant"];
// friends.myForEach(function(name){
//     console.log("I love " + name);
// });