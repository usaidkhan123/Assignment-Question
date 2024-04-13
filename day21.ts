// assignment no 61
// Making a list (enum) for different types of vehicles
enum VehicleType {
    Car ,
    Truck ,
    Motorcycle,
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.

// assignment no 62
// creating a blueprint (interface) for student
interface student {
    name :string;
    age :number;
    course : string[];
}

let student : student = {
    name : "usaid",
    age : 17,
    course : ["math","physics","chemistry"]

}

console.log(student);

//assignment no 63
// creating the custom type (alias type) for cars 

type Cars = {
    car :"Civic" | "vezel";
    color : string;
    model : number;
};

let Civic: Cars ={
    car : "Civic",
    color : "black",
    model : 123456789
};

let vezel: Cars = {
    car : "vezel",
    color : "blue",
    model : 123456789
};

console.log(Civic);
console.log(vezel);


