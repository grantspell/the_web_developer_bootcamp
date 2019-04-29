// getElementById()
var tag = document.getElementById("highlight");
console.log(tag);
console.dir(tag);

// getElementsByClassName()
var tags = document.getElementsByClassName("bolded");
console.dir(tags);

// getElementsByTagName()
var liTags = document.getElementsByTagName("li");
console.log(liTags);

var body = document.getElementsByTagName("body");
console.log(body);

// querySelector()
// always returns the first element that matches CSS-Style selector [one value]

    // select by ID
    var idTag = document.querySelector("#highlight");
    console.log(idTag);

    // select by Class
    var classTag = document.querySelector(".bolded");
    console.log(classTag);

    // select by Element
    var h1 = document.querySelector("h1");
    console.log(h1);

// querySelectorAll()
// will return multiple items with the same CSS-Style selectors

var lis = document.querySelectorAll("li");
console.log(lis);

var boldedTwo = document.querySelectorAll(".bolded");
console.log(boldedTwo);