const user = {
    username: "paresh",
    logInCount: 9,
    signedIn : true,

    getUserDetails: function(){
        console.log('getUserDetails in database')
    }
}

console.log(user.username)
console.log(user.logInCount)

function User(username,logCount,IsloggedIn) {
    this.username = username
    this.logInCount = logCount
    this.IsloggedIn = IsloggedIn

    this.greeting = function(){
        console.log(`Welcome to ${this.username}`)
    }

    return this;
}

const userOne = new User('paresh',9,true);
const userTwo = new User('bapu',7,false);
console.log(userOne.constructor)
console.log(userTwo)

console.log(userOne instanceof User)