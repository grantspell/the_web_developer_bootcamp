// Come up with 4 different ways to select the first <p> tag
var first = document.getElementById("first");
console.log(first);
var second = document.getElementsByTagName("p")[0];
console.log(second);
var third = document.querySelector(".special");
console.log(third);
var fourth = document.querySelector("body > p");
console.log(fourth);
var fifth = document.getElementsByClassName("special")[0];
console.log(fifth);
var sixth = document.querySelector("p");
console.log(sixth)
var seventh = document.querySelector("h1 + p");
console.log(seventh);