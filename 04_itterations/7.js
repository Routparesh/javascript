const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNums = myNums.map((n) =>{
//     return n+10
// })

//chaining system

const newNums = myNums
                .map((num) =>num+10)
                .map((num)=>num+1)
                .filter((num) => num>17)

console.log(newNums)