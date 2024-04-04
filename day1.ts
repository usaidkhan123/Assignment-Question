// assignment no 1
function toUpperCase(str: string) {
  return `${str}`.toUpperCase();
}

let Names: string = "i am learning typescript";
let uppercase: string = toUpperCase(Names);
console.log("uppercase:", uppercase);
// LOWERCASE
function toLowerCase(str: string) {
  return `${str}`.toLowerCase();
}

let lowercase: string = toLowerCase(Names);
console.log("lowercase:", lowercase);

// TITLECASE
let personName: string = "i am learning typscript";
// step2
let word: string[] = personName.split(" "); // array 
// step3
let titlecase: string = "";
// step4
for (let i = 0; i < word.length; i++) {
  titlecase +=
    word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " "//" " for space
}
console.log(titlecase);