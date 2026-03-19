class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Inside a child class constructor, super(...) is used to pass arguments to the parent class constructor.
// You can also use super.methodName() to call methods from the parent class.

class Teacher extends User{
    constructor(username, email, password){
        super(username) 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const jsrise = new Teacher("jsrise", "jsrise@teacher.com", "123")

jsrise.logMe()
const thejsrise = new User("thejsrise")

thejsrise.logMe()

console.log(jsrise instanceof User);