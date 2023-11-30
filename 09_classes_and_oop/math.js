const value = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(value)


const user = {
    username:'paresh',
    email:'paresh@email.com',

    callMe:function(){
        console.log(`call me`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(user, 'username'))

Object.defineProperty(user, 'email', {
    writable: false,
    enumerable: false,
    configurable: false
})

for(let [key, value] of Object.entries(user)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }  
} 
