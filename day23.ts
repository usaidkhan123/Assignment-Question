// assignment no 67
// creating function of mixtype with arthmetic operator
function mixType( number: number, nameString: string) : number {
    return number + Number(nameString);
};
console.log(mixType(5,"8"));

// asignment no 68
// creating a function that multiply two decimal
 function decimals(num1 :number , mun2: number) : number {
    return Math.round((num1 * mun2)*100) / 100;
 }
console.log(decimals(0.1,0.2));

// assignment no 69
// creating a function that give remainder and qoutient both
function divideAndremainder( dividend : number , diviser: number) : { remainder : number , qoutient : number} {
    let remainder = Math.round(dividend / diviser);
    let qoutient = dividend % diviser;
    return {remainder,qoutient}
}
console.log(divideAndremainder(5,10));

