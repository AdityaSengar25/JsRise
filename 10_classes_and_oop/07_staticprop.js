class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // this static keyword will refrain the method from being accessible on instances of the class
        return `123`
    }
}

const aditya = new User("aditya")
// console.log(aditya.createId()) // this will throw an error due to static method

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());