// function sayMyName(){
//     console.log('p')
//     console.log('a')
//     console.log('r')
//     console.log('e')
//     console.log('s')
//     console.log('h')
// }

// sayMyName() 

// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const result = addTwoNumbers(39,40)

// console.log(result)

// function userLogin(username = 'bapu'){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} login successfully`
// }

// const user = userLogin()

// console.log(userLogin('paresh'))

//rest operatior

function addCardPrice(val1,val2,val3,...cardPrice){
    return cardPrice
}

console.log(addCardPrice(200,200,400,598,600,120340))


//object passed inside the function
const user = {
    username: 'paresh',
    age:29,
    isLoggedIn: true
}

function users(anyuser){
    console.log(`${anyuser.username} is best. Your age is ${anyuser.age}`)
}

users(user)

//array passed to inside function
const myNewArr = [200,400,500,600]
function getarr(newarr){
    return newarr[0]
}

console.log(getarr(myNewArr))