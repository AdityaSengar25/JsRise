// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "sengar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //all later values in obj2 and obj4 goes and copies to obj1.

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // took all keys and arra me rkh diya
// console.log(Object.values(tinderUser)); // same as keys values ko lekr array me rkh diya
// console.log(Object.entries(tinderUser)); //array inside array and in the inner array first entity is key and second is value

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check availability of that property('isLoggedIn') in the object. return bool


const course = {
    coursename: "jsRise",
    price: "999",
    courseInstructor: "hilary"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // syntax for structuring , so no need to use this "course.courseInstructor" evertime to acess the instructor name
// console.log(courseInstructor);
console.log(instructor);


// JSON format example // API as object
// {
//     "name": "hilary",
//     "coursename": "jsRise",
//     "price": "free"
// }


//API as array
[
    {},
    {},
    {}
]
