// const nums = [1, 2, 3, 4, 5]

// const newNums = nums.reduce((acc,curval)=>{
//     console.log(`${acc} and ${curval}`)
//     return acc + curval;
// },0)

// console.log(newNums)


const shoppingCart = [
    {
        'course': 'js',
        'price': 499
    },
    {
        'course': 'python',
        'price': 799
    },
    {
        'course': 'Data Science',
        'price': 3500
    },
    {
        'course': 'web development',
        'price': 4900
    }
]

const total = shoppingCart.reduce((acc,item)=>
    acc + item.price
,0)

console.log(total)