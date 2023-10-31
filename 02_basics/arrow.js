const user = {
    username:'paresh',
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    },

   

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = 'sam';
//     console.log(this.username)
// }
const two = function one(){
    let username = 'sam';
    console.log(this.username)
}

//arrow function
const three = () =>{
    let username = 'sam';
    console.log(this)
}

// const addTwoNum = (num1,num2) => (num1+num2)
// const addTwoNum = (num1,num2) => {return num1+num2}
const addTwoNum = (num1,num2) => ({username:'paresh'})

console.log(addTwoNum(2,4))

// one()
two()
three()