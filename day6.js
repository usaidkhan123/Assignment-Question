// assignment no 16
var guests = ["usaid", "ali", "abdullah"];
// guests.unshift("amir"); // add name in start
// splice method
guests.splice(Math.floor(guests.length / 2), 0, "rizwan");
// ush method  
guests.push("haris");
// foreach
guests.forEach(function (guest) {
    console.log("because of new table; ".concat(guest, ",you are invited for the dinner"));
});
console.log("updated list og guests: ".concat(guests));
console.log("unfortunately,our new table won't arrive at time");
// assignment no 17
while (guests.length > 2) {
    var removeguest = guests.pop();
    if (removeguest !== undefined)
        console.log("sorry ".concat(removeguest, ",we cant invite you"));
}
guests.forEach(function (guest) {
    console.log("Dear, ".concat(guest, ",you are invited for the dinner"));
});
//   assignment no 18  
var places = ["china", "new zealand", "canada", "italy", "australia"];
console.log("orignal order:", places);
console.log("alphabatical order:", places.slice().sort());
console.log("alphabatical order:", places.slice().sort().reverse());
// array is still in orginal place
console.log("orignal order ".concat(places));
//
console.log("reverse order");
places.reverse();
console.log(places);
//
console.log("orignal order:", places.sort());
//
console.log("reverse alphabatical order:", places.sort().reverse());
console.log(places);
