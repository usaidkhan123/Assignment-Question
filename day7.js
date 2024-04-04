// assignment no 19
var guests = ["usaid", "ali", "abdullah",];
guests.splice(Math.floor(guests.length / 2), 0, "rizwan");
guests.push("haris");
console.log("updated list og guests: ".concat(guests));
console.log("unfortunately,our new table won't arrive at time");
while (guests.length > 2) {
    var removeguest = guests.pop();
    if (removeguest !== undefined)
        console.log("sorry ".concat(removeguest, ",we cant invite you"));
}
guests.forEach(function (guest) {
    console.log("Dear, ".concat(guest, ",you are invited for the dinner"));
});
// assignment no 20
var cities = ["Karachi", "Lahore", "Islamabad", "Multan"];
console.log("List of cities:");
cities.forEach(function (cities) {
    console.log(cities);
});
var car = {
    name: "civic",
    colour: "black",
    price: 100000,
    numberplate: 123456789,
};
console.log("car object:");
console.log(car);
