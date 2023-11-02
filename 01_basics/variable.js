// var x = 2;
// var y = "2";
// console.log(x==y);

// 
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// var a=1;
// if(a!=null) 
//     console.log(1)
// else
//     console.log(0)

// var js = (function(n) {return n*n;}(10));
// js

// function compare()
// {
//     let a=2;
//     const b=2;
//     if(a==b)
//         return true;
//     else
//         return false;
// }

// compare()

// var a=5 , b=1
// var obj = { a : 10 }
 

// console.log(obj.a)

// var js = 0;
// while (js < 10) 
// {
//     console.log(js);
//     js++;
// }

// var a=0;
// for(a;a<5;a++);
// console.log(a);


// function compare()
// {
//     var a=1;
//     var b=1;
//     if(a.toString()===b)
//         return true;
//     else 
//         return false;
// }

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "It was really "+ myAdjective+ " " + myNoun + ", and we "+ myVerb+ " " + myAdverb
+'.'; // Change this line
// Only change code above this line
console.log(wordBlanks)


const a = [2,3,67,7,8]

const  [x,y,z] = a;

console.log(x)

function testLogicalOr(val) {
    // Only change code below this line
  
   if(val<=10 || val>=20){
     return 'Outside'
   }else{
     return 'Inside'
   }
  
    // Only change code above this line
    return "Inside";
  }
  
console.log(testLogicalOr(15));