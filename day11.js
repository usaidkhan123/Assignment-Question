// assignment no 31
var noUsers = [];
if (noUsers.length === 0) {
    console.log("we need some users");
}
else {
    console.log("Hello, ".concat(noUsers, " how are you"));
}
// assignment no 32
var currentUsers = ["ali", "usaid", "sohaib", "andullah", "haris"];
var newUsers = ["ali", "usaid", "rizwan", "asif"];
currentUsers.forEach(function (currentuser) {
    if (newUsers.includes(currentuser)) {
        console.log(" ".concat(currentuser, ", you need to enter new name"));
    }
    else {
        console.log("".concat(currentuser, ",your names is available"));
    }
});
// assignment no 33
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix === "st";
    }
    else if (number === 2) {
        suffix === "nd";
    }
    else if (number === 3) {
        suffix === "rd";
    }
    else if (number === 4) {
        suffix === "th";
    }
    else if (number === 5) {
        suffix === "th";
    }
    console.log("".concat(number, " ").concat(suffix));
});
