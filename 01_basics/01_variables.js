const accountId = 1234
let email = "adi@google.com"
var accPass= "1234" // fckedup scope

// prefer not use vaar due to issue in block scope and functional scope

accCity="kanpur" // can declare but shouldnt, declares it as global
let accState; // undefined

//accountId = 2 // not allowed to change on const 

email = "a@a.com"
accPass="qwe"
accCity="gwalior"

console.log(accountId)
console.table([accountId,email,accPass,accCity,accState])