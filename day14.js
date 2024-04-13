//assignment no 40
// function make_album(artist: string, title: string, tracks?: number) {
//     let album ={artist,title};
//     if(tracks){
//         album['tracks']=tracks;
//     }
//     return album;
// };
// console.log(make_album('artistone','first album'));
// console.log(make_album('artisttwo','second album'));
// console.log(make_album('artistthree','third album',123));
// assignment no 41  array pass through function
var magician = ['jack', 'john', 'sara'];
function magicians(magician) {
    magician.forEach(function (magicians) {
        console.log(magicians);
    });
}
magicians(magician);
//assignment no 42
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] + "great";
    }
}
make_great(magician); // Modifies the original array
magicians(magician); // Shows modified names
