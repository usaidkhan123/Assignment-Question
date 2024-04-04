// assignment no 13
let transportmode : string[] = ["car","motorcycle","bus",]

for (let i = 0; i < transportmode.length; i++) {
    console.log(`please wait for ${transportmode[i]}`);
    
}

transportmode.forEach(mode => {
    console.log(`please wait for me ${mode}`);
    
});

// assignment no 14 
// for loop method 
let guestlist : string[] = ["usaid","ali","abdullah"];

for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear ${guestlist[i]}, you are invited to dinner`);
}

// map method 
 let invitation : string[] = guestlist.map(guest => `Dear ${guestlist}, you are invited to dinner`)
 console.log(invitation);

// for each method
// invitation.forEach(invitations => {
//     console.log(invitations);
    
// });

// assignment no 15
 let guest : string[] = ["usaid","ali","abdullah"]
// print the name who cant reach
let unableattends : string = guest.splice(1,1)[0];
console.log(`${unableattends} can't reach`);
// new guest in replacement of unattended guest
guest.push("amir")
console.log(guest)

guest.forEach(guests => { 
    console.log(`${guests},you are invited to the dinner`);
    
});



