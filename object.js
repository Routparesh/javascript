//singleton

const tinderUser = new Object();
console.log(tinderUser);

tinderUser.id = '123abc';
tinderUser.regularUser ={
    name:{
        fullName:{
            firstName :'paresh',
            lastName: 'Rout'
        }
    }  
}

// console.log(tinderUser.regularUser.name.fullName.lastName);

//object literal

// Object.create

const mySym = Symbol('key1');

// console.log(typeof mySym)

// const jsUser = {
//     name:'paresh',
//     age:29,
//     [mySym]:'mykey1',
//     'full name':'Paresh Kumar Rout',
//     location:'jajapur',
//     isLogedIn:false,
//     lastLoggedIn:['Monday','saturday'],
//     email:'routpareshkumar737@gmail.com'
// }

// console.log(jsUser.location)
// console.log(jsUser['email'])
// console.log(jsUser['full name'])
// console.log(jsUser[mySym])

// console.log(jsUser)

// jsUser.email = 'router@example.com'

// console.log(jsUser)

// Object.freeze(jsUser)

// jsUser.email = 'paresh@example.com'

// console.log(jsUser)

// jsUser.greeting = function (){
//     console.log(`Hello jsUser`)
// }
// jsUser.greetingTwo = function (){
//     console.log(`Hello jsUser ${this.name}`)
// }

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())

const obj1 = {1:'p',2:'a',3:'r'}
const obj2 = {4:'e',5:'s',6:'h'}
const obj3 = {7:'q',8:'u',9:'h'}
const obj4 = {10:'e',11:'s',22:'h'}

// const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)
const obj5 = {...obj1,...obj2,...obj3,...obj4}
console.log(obj5);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('id'))


