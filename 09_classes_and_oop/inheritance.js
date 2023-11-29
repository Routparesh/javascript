class User{
    constructor(username){
        this.username = username;
    }

    static logMe(){
        console.log(`My name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    adCourses(){
        console.log(`courses added by ${this.username}`)
    }
}

const paresh = new Teacher('paresh','paresh@gmail.com',123);
const rout = new User('paresh')

paresh.adCourses()

rout.logMe()