// assignment no 46  describe method
let laptop = {
    make : 'lenovo', 
    model :'T460',
    year : '2016',
    describe : function (){
        console.log(`this laptop is ${this.make} ${this.model} launched at ${this.year}`);
    }
};
laptop.describe();

//assignment no 47 advance array destucturing 
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "lenovo", model: "t460", year: 2021 }
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);

// assignment no 48  combining array with spread operator(...)
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
