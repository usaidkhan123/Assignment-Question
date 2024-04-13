// assignment no 43
// let magicians: string[] = ["Alice", "David", "Chris"];
// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magician => {
//         greatMagicians.push(`${magician} the Great`);
//     });
//     return greatMagicians;
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows mod
// assignment no 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items));
}
;
make_sandwich("cheese", "ham");
make_sandwich("sauce", "vegetabals");
make_sandwich("chicken", "meat");
//assignment no 45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car('toyota', 'corola', ['color', 'red'], ['newrims', 2020]));
console.log(make_car('honda', 'civic', ['color', 'black'], ['sunroof', true]));
// function make_car(manufacturer: string, model: string, ...options: [string, any][]) :Object {
//     let car = { manufacturer, model }
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
