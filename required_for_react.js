
// arrow function
// var name = (a,b)=>{
//     console.log(a+b)
// }

// name(10,20)

//templete litarel
// const name1 = 'paresh'
// const name2 = 'amar'
// console.log(`My name is = '${name1}'and My brother name is = '${name2}'`)

//ternary operator
// const age = 2
// const drive = (age>=18 ) ? 'you can drive': "you can't drive"
// console.log(drive)

// const person ={
//     Name:"paresh",
//     email: "routpareshkumar737@gmail.com",
//     ph:891739964,
//     bike:'pulsor',
//     age:27
// }

//spred operator
// const person2 = {...person,Name:'Bapu',age:27}
// console.log(person2)
// const number = [10,20,30]
// const number2 =[...number,40,60]
// console.log(number2)
// console.log(person.Name)

// object destructruing
// const {Name,age,gmail,bike} = person
// console.log(Name)
// console.log(bike)

//map
// const number = [20,30,40,70,80];

// const result = number.map((n)=>{
//     return n+10;
// })

// console.log(...result)



//filter
// const number = [10,20,30,40,50];

// const result = number.filter((n)=>{
//     return n>40;
// })

// console.log(result)

// const mobiles = [
//     {
//       name: "iPhone 13",
//       price: 99900,
//       size: "6.1 inches"
//     },
//     {
//       name: "Samsung Galaxy S21",
//       price: 79900,
//       size: "6.2 inches"
//     },
//     {
//       name: "Google Pixel 6",
//       price: 82000,
//       size: "6.4 inches"
//     },
//     {
//       name: "OnePlus 9 Pro",
//       price: 89900,
//       size: "6.7 inches"
//     },
//     {
//       name: "Xiaomi Mi 11",
//       price: 59900,
//       size: "6.81 inches"
//     },
//     {
//       name: "LG Velvet",
//       price: 49900,
//       size: "6.8 inches"
//     },
//     {
//       name: "Sony Xperia 1 III",
//       price: 10990,
//       size: "6.5 inches"
//     },
//     {
//       name: "Oppo Find X3 Pro",
//       price: 11990,
//       size: "6.7 inches"
//     },
//     {
//       name: "Nokia 8.3 5G",
//       price: 69900,
//       size: "6.81 inches"
//     },
//     {
//       name: "Motorola Moto G Power (2021)",
//       price: 19900,
//       size: "6.6 inches"
//     }
//   ];
  

// const result = mobiles.filter((n)=>n.price>50000)

// console.log(result);

//reduce

// const number = [10,20,30,40]

// const result = number.reduce((num1,num2)=>{
//     return num1 + num2
// })

// console.log(result)

//async await

const fetchData = async () => {
    const api = await fetch('https://api.nasa.gov/planetary/earth/imagery')
    const data = await api.json()
    console.log(data)
}

fetchData()

//import / exports

export const number = (n1,n2) => n1+n2

const person = 'suman'

export default person







