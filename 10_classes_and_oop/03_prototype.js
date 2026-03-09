// let myName = "aditya     "
// let mychannel = "JsRise     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aditya = function(){ // if we applied a property to Object then it gets to all due to prototype behaviour
    console.log(`aditya is present in all objects`);
}

Array.prototype.heyaditya = function(){
    console.log(`aditya says hello`);
}

// heroPower.aditya()
// myHeros.aditya()
// myHeros.heyaditya()
// heroPower.heyaditya()

// inheritance

const User = {
    name: "JsRise",
    email: "JsRise@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JsRise     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"aditya".trueLength()
"iceTea".trueLength()