// assignment no 61
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
var student = {
    name: "usaid",
    age: 17,
    course: ["math", "physics", "chemistry"]
};
console.log(student);
var Civic = {
    car: "Civic",
    color: "black",
    model: 123456789
};
var vezel = {
    car: "vezel",
    color: "blue",
    model: 123456789
};
console.log(Civic);
console.log(vezel);
