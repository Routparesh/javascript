const coding = ['js', 'css', 'html','c++','python']

// coding.forEach((e)=>{
//     console.log(e)
// })

// function printMe (item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr[3])
// })


const myCoding = [{
    'myLanguage':'python',
    'filename':'py'
},{
    'myLanguage':'JavaScript',
    'filename':'js'
},{
    'myLanguage':'c++',
    'filename':'cpp'
},{
    'myLanguage':'java',
    'filename':'Java'
}]

myCoding.forEach((val)=>{
    console.log(val.filename)
})
