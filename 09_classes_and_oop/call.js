// function User(username){
//     this.username = username;
// }

// function getUser(username,email,password){
//     this.email = email;
//     this.password = password;
//     User.call(this, username)
// }

// const newUser = new getUser('paresh','rout@gmail.com',123)

// console.log(newUser)

function cust(val){
    this.val = val
} 

function user(val){
    cust.call(this,val)
}

const chai = new user('chai')

console.log(chai)