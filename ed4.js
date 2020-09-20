/*
Taking the below variable, using the postcode, 
- copy the user element into the relevant state
SA = 5000, Qld = 4000 , Vic = 3000, NSW = 2000
*/

const users = [
    {
        id: 1,
        name: "Name 1",
        group: "Educator",
        location: {
                Street: "1 Dutch Lane",
                Suburb: "Biscuit",
                postcode: 4324
        }
    },
    {
        id: 2,
        name: "Name 2",
        group: "Educator",
        location: {
            Street: "1 chocolate Lane",
            Suburb: "cookie",
            postcode: 5431
        }
    },
    {
        id: 3,
        name: "Name 3",
        group: "Student",
        location: {
            Street: "1 Wagon Street",
            Suburb: "Wheel",
            postcode: 2334
        }
    },
    {
        id: 4,
        name: "Name 4",
        group: "Student",
        location: {
            Street: "1 Strawberry Circuit",
            Suburb: "Sundae",
            postcode: 3321
        }
    },
    {
        id: 5,
        name: "Name 5",
        group: "Mentor",
        location: {
            Street: "1 Inspiration Way",
            Suburb: "Turn it Around",
            postcode: 3333
        }
    }
]

let queensland = []
let newSouthWales = []
let victoria = []
let southAustralia = []
// e
function sortaBoi(users) {
    users.forEach((thing) => {
        switch(Math.floor(thing.location.postcode / 1000)) {
            case 5:
                southAustralia.push(thing);
                break;
            case 4:
                queensland.push(thing);
                break;
            case 3:
                victoria.push(thing);
                break;
            case 2:
                newSouthWales.push(thing);
                break;
            default:
                break;
        }
    })
}

sortaBoi(users);

console.log(queensland);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(newSouthWales);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(southAustralia);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log(victoria);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

module.exports = {
    queensland, newSouthWales, victoria, southAustralia
}