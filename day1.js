// assignment no
function toUpperCase(str) {
    return "".concat(str).toUpperCase();
}
var Names = "i am learning typescript";
var uppercase = toUpperCase(Names);
console.log("uppercase:", uppercase);
// LOWERCASE
function toLowerCase(str) {
    return "".concat(str).toLowerCase();
}
var lowercase = toLowerCase(Names);
console.log("lowercase:", lowercase);
// TITLECASE
var personName = "i am learning typscript";
// step2
var word = personName.split(" "); // array 
// step3
var titlecase = "";
// step4
for (var i = 0; i < word.length; i++) {
    titlecase +=
        word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " "; //" " for space
}
console.log(titlecase);
