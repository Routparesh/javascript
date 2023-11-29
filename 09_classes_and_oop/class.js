class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        return `${this.password}abc`
    }

    userUppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('paresh','paresh@gmail.com',123)

console.log(chai.encryptedPassword())
console.log(chai.userUppercase())