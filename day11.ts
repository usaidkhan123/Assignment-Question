// assignment no 31
let noUsers : string[] = [];
if (noUsers.length === 0) {
    console.log("we need some users"); 
} else {
    console.log(`Hello, ${noUsers} how are you`);    
}

// assignment no 32
let currentUsers : string[] = ["ali","usaid","sohaib","andullah","haris"];
let newUsers : string[] = ["ali","usaid","rizwan","asif"];
  currentUsers.forEach(currentuser => {
    if (newUsers.includes(currentuser)){
        console.log(` ${currentuser}, you need to enter new name`);
    } else {
        console.log(`${currentuser},your names is available`);
        
    }
    
});
 // assignment no 33
let numbers : number[] = [1,2,3,4,5];
numbers.forEach(number => {
    let suffix : string ="th";
    if (number === 1){
        suffix === "st";        
    } else if (number === 2){
        suffix === "nd";
    } else if (number === 3){
        suffix === "rd";
    } else if (number === 4){
        suffix === "th";
    } else if (number === 5){
        suffix === "th";
    }  
        console.log(`${number} ${suffix}`);
   
    
});
