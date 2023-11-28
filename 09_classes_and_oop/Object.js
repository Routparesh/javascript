function multiplyBy5(num){
    return num*5;
}

console.log(multiplyBy5(5))

multiplyBy5.power = 2;

console.log(multiplyBy5.prototype)
console.log(multiplyBy5.power)

function createUser(username, password){
    this.username = username;
    this.password = password;
}

createUser.prototype.printMe = function(){
    console.log(`username is ${this.username}`)
}

createUser.prototype.PrintPassword = function(){
    console.log(`password is ${this.password}`)
}

const Username = new createUser('paresh',123)
const password = new createUser('paresh',123)

// Username.printMe()
password.PrintPassword();