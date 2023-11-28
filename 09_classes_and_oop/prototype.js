const userName = {
    name : 'paresh',
    email: 'paresh@gmail.com'
}

Object.prototype.callMe = function(){
    console.log('My name is ' + this.name)
}

const yourName = ['paresh',12];

Array.prototype.loveMe = function(){
    console.log('Love me!')
}

yourName.loveMe()
// userName.loveMe()

userName.callMe();

const myName = ' paresh   ';

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()

//Inheritence prototype
let student = {
    name: 'paresh',
    email: 'paresh@gmail.com',
}

let socialMedia = {
    isLoggedIn: false,
}

let freelance = {
    work : 'web development',
    partTime : true,
    __proto__ : socialMedia
}

console.log(freelance.isLoggedIn)

//  New syntax for prototype
Object.setPrototypeOf(socialMedia, student)

console.log(student.isLoggedIn)