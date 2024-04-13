var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// assignment no 46  describe method
var laptop = {
    make: 'lenovo',
    model: 'T460',
    year: '2016',
    describe: function () {
        console.log("this laptop is ".concat(this.make, " ").concat(this.model, " launched at ").concat(this.year));
    }
};
laptop.describe();
//assignment no 47 advance array destucturing 
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "lenovo", model: "t460", year: 2021 }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
// assignment no 48  combining array with spread operator(...)
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort;
console.log(combinedPrices);
