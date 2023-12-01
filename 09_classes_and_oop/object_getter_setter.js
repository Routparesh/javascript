const User = {
    _email : 'paresh@gmail.com',
    _password: 123,

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }

}

const paresh = Object.create(User);
console.log(paresh.email)