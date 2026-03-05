const user = {
    username: "aditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // this in global context is empty in nodejs env.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

//without using "new"- constructor func we wont get new instance and the value will be overwritten
// 1. using new keyword an empty object gets created every time called as instance
// 2. then a constructor func gets called and all the arguments get packet and returned through it
// 3. all the arguments gets injected into this keyword
// 4. we get those arguments in func
const userOne = new User("aditya", 12, true)
const userTwo = new User("JsRise", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// instanceof in JavaScript is used to check whether an object was created from a particular constructor (or class).
//It returns:

// true ✅ → if the object was created from that constructor

// false ❌ → if it was notIt returns:

