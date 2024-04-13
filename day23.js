// assignment no 67
// creating function of mixtype with arthmetic operator
function mixType(number, nameString) {
    return number + Number(nameString);
}
;
console.log(mixType(5, "8"));
// asignment no 68
// creating a function that multiply two decimal
function decimals(num1, mun2) {
    return Math.round((num1 * mun2) * 100) / 100;
}
console.log(decimals(0.1, 0.2));
// assignment no 69
// creating a function that give remainder and qoutient both
function divideAndremainder(dividend, diviser) {
    var remainder = Math.round(dividend / diviser);
    var qoutient = dividend % diviser;
    return { remainder: remainder, qoutient: qoutient };
}
console.log(divideAndremainder(5, 10));
