// assignment no 19
let guests : string[] = ["usaid","ali","abdullah",]
guests.splice(Math.floor(guests.length / 2),0,"rizwan")
guests.push("haris");

console.log(`updated list og guests: ${guests}`);
console.log("unfortunately,our new table won't arrive at time");

 while (guests.length > 2){
    let removeguest : string | undefined = guests.pop();
    if (removeguest !== undefined)
    console.log(`sorry ${removeguest},we cant invite you`);

 }
guests.forEach(guest => {
    console.log(`Dear, ${guest},you are invited for the dinner`)
    
 });

// assignment no 20

let cities : string[] = ["Karachi","Lahore","Islamabad","Multan"];
 console.log("List of cities:");
cities.forEach(cities => {
   console.log(cities);
   
});

// assignment no 21

interface car {
   name : string,
   colour : string,
   price : number,
   numberplate : number,
}

let car : car  = {
   name : "civic",
   colour : "black",
   price : 100000,
   numberplate : 123456789,

}
console.log("car object:");
console.log(car);