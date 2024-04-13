// assignment no 49 
// Defines a function that accepts multiple hobbies as arguments
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // Loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        // Logs a statement for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
// Calls the function with three hobbies
hobbies("gaming", "coding", "cricket");
// assignment no 50
// Using template literals to define a multiline string
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a gym.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by playing a game.";
// Logging the multiline string to the console
console.log(myIdealDay);
// assignment no 51
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };
// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
