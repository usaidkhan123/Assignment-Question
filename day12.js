// assignment no 34
var pizza = ['bbq', 'fajita', 'pepperoni'];
pizza.forEach(function (pizzaflavours) {
    console.log("i like ".concat(pizzaflavours, " pizza."));
});
console.log("i really love these pizzas.");
// assignment no 35
var animals = ['cow', 'goat', 'sheep'];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would be a great pet."));
});
console.log('I like these animals.');
// assignment no 36
function t_shirt(size, colour) {
    console.log("buying a ".concat(size, " t-shirt with colour").concat(colour, " printed on it."));
}
t_shirt('medium', 'blue');
