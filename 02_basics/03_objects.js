// object if constructor(object) se bnega - always singleton 
// if made from literals - not singleton

// singleton
// Object.create // constructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Sengar", //can also declare it like this
    [mySym]: "mykey1", // [] needed for symbol to later access it
    age: 18,
    location: "Gwalior",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //accessed like this
// console.log(JsUser["email"]) //can also be accessed like this

// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // only way to access symbol in object

JsUser.email = "aditya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aditya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this used cuz jsuser.greeting ke baad it will automatically show the things inside object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());