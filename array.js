let num = [0,1,2,3,4,5]

console.log(num[4])

// let result = num.includes(3)
//  let result = num.indexOf(9)
//  let newArr = num.join()
// console.log(typeof newArr)

const result = num.slice(1,3)
console.log('slice: ' + result)

const result2 = num.splice(1,2,7,8,9)
console.log('splice: ' + result2)

console.log(num)