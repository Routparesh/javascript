// const promiseOne =  new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('my name is paresh')
//         resolve()
//     },1000)
// });

// promiseOne.then(function (){
//     console.log('promise resolved successfully')
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('complete asnyc task 2')
//         resolve()
//     },1000)
// }).then(function (){
//     console.log('promise 2 resolved successfully')
// });

// const promiseThree = new Promise(function (resolve, reject) {
//         resolve({
//             name: "paresh kumar rout",
//             email:"rout@gmail.com"
//         })
// });

// promiseThree.then(function (user){
//         console.log(user)
// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true;

        if (error){
            resolve({
                username: 'paresh kumar rout',
                password: '123'
            })
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)  
});

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
})