//with declaration syntax
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//without declaration syntax
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// incase of passing value from resolve to then.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "JsRise", email: "JsRise@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// then chaining and error handling
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "aditya", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // this then will get what is returned from the previous then // inside function can name it anything
    console.log(username);
}).catch(function(error){ // inside func can name it anything
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// use of async/await insted of then.
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){ // this works but they dont handle error like then catch. so, try catch is used.
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // the response parsing to JSON also takes time so it needs await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/adityasengar25')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all - The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises. It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.
// Promise.all() will reject immediately upon any of the input promises rejecting.

