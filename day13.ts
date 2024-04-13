// assignment no 37
function t_shirt(size: string ='large', colour : string = 'black') {
    console.log(`buying a ${size} t-shirt with colour ${colour} printed on it.`);    
}
t_shirt();  // default parameters
t_shirt('medium');  // size is medium and colour is default
t_shirt('small','blue');

// assignment no 38
function cities( city: string , country: string ='pakistan'){
    console.log(`${city} is located in ${country}`);    
}
cities('karachii'); // karachi is located in pakistan
cities('multan');   // multan ////////////////////////
cities('new york','usa');

// assignment no 39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Paris", "France"));