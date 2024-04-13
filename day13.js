// assignment no 37
function t_shirt(size, colour) {
    if (size === void 0) { size = 'large'; }
    if (colour === void 0) { colour = 'black'; }
    console.log("buying a ".concat(size, " t-shirt with colour ").concat(colour, " printed on it."));
}
t_shirt(); // default parameters
t_shirt('medium'); // size id medium and colour is default
t_shirt('small', 'blue');
// assignment no 38
function cities(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is located in ").concat(country));
}
cities('karachii'); // karachi is located in pakistan
cities('multan'); // multan ////////////////////////
cities('new york', 'usa');
// assignment no 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Paris", "France"));
