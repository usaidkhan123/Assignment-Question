// assignment no 10 comments
// assignment no 11 and 12
var names = ["usaid", "ali", "abdullah", "umer"];
for (var i = 0; i < names.length; i++) { // loop method
    console.log("please wait for me", names[i]);
}
;
names.forEach(function (names) {
    console.log("please wait for me ", names);
});
// assignment no 13
var transportmode = ["car", "motorcycle", "bus",];
for (var i = 0; i < transportmode.length; i++) {
    console.log("please wait for ".concat(transportmode[i]));
}
transportmode.forEach(function (mode) {
    console.log("please wait for me ".concat(mode));
});
