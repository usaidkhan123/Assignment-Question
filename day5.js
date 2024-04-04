// assignment no 13
var transportmode = ["car", "motorcycle", "bus",];
for (var i = 0; i < transportmode.length; i++) {
    console.log("please wait for ".concat(transportmode[i]));
}
transportmode.forEach(function (mode) {
    console.log("please wait for me ".concat(mode));
});
// assignment no 14 
// for loop method 
var guestlist = ["usaid", "ali", "abdullah"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear ".concat(guestlist[i], ", you are invited to dinner"));
}
// map method 
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guestlist, ", you are invited to dinner"); });
console.log(invitation);
// for each method
// invitation.forEach(invitations => {
//     console.log(invitations);
// });
// assignment no 15
var guest = ["usaid", "ali", "abdullah"];
// print the name who cant reach
var unableattends = guest.splice(1, 1)[0];
console.log("".concat(unableattends, " can't reach"));
// new guest in replacement of unattended guest
guest.push("amir");
console.log(guest);
guest.forEach(function (guests) {
    console.log("".concat(guests, ",you are invited to the dinner"));
});
