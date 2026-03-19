// most mpdern syntax

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
// if we give a getter there has to be a setter else the code will throw an error
// setter doesnot return values

    get email(){
        return this._email.toUpperCase() //.  the email is changed and now its _email so it doesnot interfere with the original.  lets say we are setting the new valuee of email to _email and getting the same so no first initialise email is getting after the updation 
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aditya`
    }

    set password(value){
        this._password = value
    }
}

const aditya = new User("a@aditya.ai", "abc")
console.log(aditya._password); // gives original value we set
console.log(aditya.password); // gives the value with "abcaditya" appended



/// better syntax for getter and setter ///
//function based syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const jsrise = new User("jsrise@jsrise.com", "jsrise")

console.log(jsrise.email);

//object based syntax

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);