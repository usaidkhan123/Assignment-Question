// assignment no 34
let pizza : string[] =['bbq','fajita','pepperoni'];
pizza.forEach(pizzaflavours => {
    console.log(`i like ${pizzaflavours} pizza.`); 
});
console.log(`i really love these pizzas.`);

// assignment no 35
let animals : string[] =['cow','goat','sheep'];
animals.forEach(animal => {
    console.log(`A ${animal} would be a great pet.`)
});
console.log('I like these animals.');

// assignment no 36
function t_shirt(size: string, colour:string) {
    console.log(`buying a ${size} t-shirt with colour${colour} printed on it.`);    
}
t_shirt('medium','blue');