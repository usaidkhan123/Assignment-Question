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
function make_sandwich(...items: string[]){
    console.log(`making a sandwich with: ${items}`);
};
make_sandwich("cheese","ham");
make_sandwich("sauce","vegetabals");
make_sandwich("chicken","meat");

//assignment no 45
function make_car(manufacturer: string, model: string , ...options: [string,any][]) :object{
    let car = { manufacturer , model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car('toyota','corola',['color','red'],['newrims', 2020]));
console.log(make_car('honda','civic',['color','black'],['sunroof', true]));
