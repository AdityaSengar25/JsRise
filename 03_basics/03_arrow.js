const user = {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// in object "this" works and helps in value access
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "aditya"
    console.log(this.username); // in functon "this" doesn't work the same way as in objects
}

chai()

// const chai = function () {
//     let username = "aditya"
//     console.log(this.username); // in functon "this" doesn't work the same way as in objects
// }

// const chai =  () => {
//     let username = "aditya" // in arrow function 'this' doesnot work cause it takes context of surrounding bloack
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aditya"}) // here object has to be wrapped in parenthesis to work


console.log(addTwo(3, 4))