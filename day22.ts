// assignment no 64
// making function that combine string and number into one text 

function combineStrAndNum(text : string , number : number) : string {
    return `${text} ${number}`;
};
console.log(combineStrAndNum("age :", 17));

// assignment no 65
// creating a function that give remainnder
function remainder( num1: number , num2: number ) : number {
    return num1 % num2;
}
console.log(remainder(5,5));

// assignment no 66
function checkBothTrue( val1: boolean , val2: boolean ) : boolean {
    return val1 && val2;    
};
console.log(checkBothTrue(true,false));
