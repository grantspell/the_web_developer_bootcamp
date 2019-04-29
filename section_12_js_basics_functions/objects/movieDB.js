// MovieDB
// Create an array of movie objects. Each movie should have a title(string), rating(number), and hasWatched(boolean) properties. Iterate through the array and print out something that looking:
// You have watched "In Bruges" = 5 stars
// You have not seen "Frozen" - 4.5 stars

function movieDB(){
var movies = [
    {
        title: "Carol",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Spy Kids",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Jonathan",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Homecoming: A Film By Beyoncé",
        rating: 10,
        hasWatched: true
    }
];

movies.forEach(function(movie){
    buildString(movie);
    console.log(buildString(movie));
});

function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title +"\" - ";
    result += movie.rating + " stars";
    return result;
}};