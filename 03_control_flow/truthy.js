let userEmail = [];

if (userEmail){
    console.log('Got user email')
}else{
    console.log('No user email')
}

//false value

// false,0,-0,BigInt 0n,'',null, undefined, NaN

//Truty value

//[],'0','false',' ',{},function(){}

if (userEmail.length === 0){
    console.log('Array is empty')
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log('Object is empty')
}

//Nullish coalesceing Operator (??): null undefined 
let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 20
// val1 = undefined ?? 30
// console.log(val1)

//ternary operator
// condition ? true : false;
const a = 10;
a > 10 ? console.log('yes') : console.log('No')