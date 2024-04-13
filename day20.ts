// assignment no 58
function avgScores( ...score : number[] ) : number {
    let total = score.reduce((total,grade) => total + grade,0)
    return total / score.length;
}
console.log(avgScores(80,90,78,66,83));

// assignment no 59
function makeAdder(valueToAdd : number) : (number) => number {
    return function (number : number) : number{
        return number + valueToAdd;
    }
}

console.log(10);

// assignment no 60
// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "usaid";
    let age = 17;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
