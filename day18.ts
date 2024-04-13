// assignment no 52
// Sets up details about a smartphone
let smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};

// Shows what we've set up about the smartphone
console.log(smartphone);

//  assignment no 53
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[1]}, Tool: ${tools[0]}`);

// assignment no 54
// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("color", "black");

// Showing the user's choice
console.log(userPreference);  