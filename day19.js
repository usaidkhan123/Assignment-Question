// assignment no 55
// Starts with a list of numbers
var numbers = [2, 4, 6, 8, 9];
// Doubles each number
var doubledNumbers = numbers.map(function (number) { return number * 2; });
// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
// assignment no 56  
// A mixed bag of items
var mixArray = ["apple", 2, "banana", true, "orange"];
// pick out only the words 
var stringArray = mixArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
// assignment no 57
var grades = [88, 99, 76, 66, 80];
// for avg grade 
var avgGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(avgGrade);
