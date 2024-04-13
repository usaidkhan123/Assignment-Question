// assignment no 49 
// Defines a function that accepts multiple hobbies as arguments
function hobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
hobbies("gaming", "coding", "cricket");

// assignment no 50
// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a gym.
2. Spending a few hours coding on a personal project.
3. Ending the day by playing a game.`;

// Logging the multiline string to the console
console.log(myIdealDay);

// assignment no 51
// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle