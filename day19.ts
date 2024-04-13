// assignment no 55     **MAP**
// Starts with a list of numbers
let numbers = [2, 4, 6, 8, 9];

// Doubles each number
let doubledNumbers = numbers.map(number => number * 2)
// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.

// assignment no 56  **FILTER**
// A mixed bag of items
let mixArray =["apple",2,"banana",true,"orange"]
// pick out only the words 
let stringArray = mixArray.filter(item => typeof item === "string");
console.log(stringArray);

// assignment no 57   **RUDUCE**
let grades = [88,99,76,66,80]
// for avg grade 
let avgGrade = grades.reduce((total,grade) => total + grade, 0) / grades.length;
console.log(avgGrade);
