// assignment no 28

let personAge : number =22;
if (personAge < 2){
    console.log("the person is baby");
} else if(personAge < 15){
    console.log("the person is kid");
} else if(personAge > 18) {
    console.log("the person is teenager");
} else if (personAge > 30){
    console.log("the person is adult");
} else if (personAge > 50){
    console.log("the person is elder");
};

// assignment no 29
let friuts : string[] = ["mango","banana","apple"]
let friutToCheck : string = "mango";
if (friuts.includes(friutToCheck)){
    console.log("the mango is in the friuts");
} else {
    console.log("the friut is not in the friuts");
}

// assignment no 30
let names : string[] = ["admin","usaid","ali","abdullah","haris"];
names.forEach(name => {
    if (name === "admin"){
        console.log(`hello admin would you like to see status report`)
    } else {
        console.log(`Hello, ${name} how are you`);
        
    }
    
});

