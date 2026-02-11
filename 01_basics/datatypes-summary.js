//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//  Js is dynamically typed

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "spidey", "aegon"]
let myObj = {
    name: "aditya",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) => copy create hogi
// heap(Non-primitve) => reference(direct connected to og)

// stack eg.
let instaId = "adityasengar.in"

let name = instaId
let Name = "Arhant"

console.log(instaId)
console.log(Name)

//heap eg.
let userOne = {
    email: "adi@gmail.com",
    upi: "adi@axl"
}
let userTwo = userOne

userTwo.email = "ar@gmail.com"

console.log(userOne) // or console.log(UserOne.email)

console.log(userTwo)