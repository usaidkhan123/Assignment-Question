// assignment no 28
var personAge = 22;
if (personAge < 2) {
    console.log("the person is baby");
}
else if (personAge < 15) {
    console.log("the person is kid");
}
else if (personAge > 18) {
    console.log("the person is teenager");
}
else if (personAge > 30) {
    console.log("the person is adult");
}
else if (personAge > 50) {
    console.log("the person is elder");
}
;
// assignment no 29
var friuts = ["mango", "banana", "apple"];
var friutToCheck = "mango";
if (friuts.includes(friutToCheck)) {
    console.log("the mango is in the friuts");
}
else {
    console.log("the friut is not in the friuts");
}
// assignment no 30
var names = ["admin", "usaid", "ali", "abdullah", "haris"];
names.forEach(function (name) {
    if (name === "admin") {
        console.log("hello admin would you like to see status report");
    }
    else {
        console.log("Hello, ".concat(name, " how are you"));
    }
});
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
