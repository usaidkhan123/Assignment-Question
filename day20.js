// assignment no 58
function avgScores() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (total, grade) { return total + grade; }, 0);
    return total / score.length;
}
console.log(avgScores(80, 90, 78, 66, 83));
// assignment no 59
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
console.log(10);
// assignment no 60
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "usaid";
    var age = 17;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
