function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // here this will be passed from here to upper func and ".call" cuz in this case the func call is happening but we wont get the reference to hold and the username will be registered but get it in create user
   
    this.email = email
    this.password = password
}

const JsRise = new createUser("JsRise", "jsrise@fb.com", "123")
console.log(JsRise);