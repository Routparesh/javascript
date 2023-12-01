class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }   

    set email(newVal){
        this._email = newVal;
    }

    get password(){
        return `${this._password}abc`;
    }

    set password(value){
        this._password = value;
    }
}


const paresh = new User('paresh@example.com',123)

console.log(paresh.email)
console.log(paresh.password)