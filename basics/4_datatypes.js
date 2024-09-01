const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id);
console.log(anotherid);
console.log(id === anotherid)


const bigint= 23467657634668786745634687n

const heros = ["abc", "xyz", "fyjgk"];

console.log(typeof heros);

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);


//////////////////////////////////////

//Stack and heap memory in javascript

let myName = "prachi"

let anotherName = myName;
anotherName = "manish";

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "user1@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email)
console.log(userTwo.email)