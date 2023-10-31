let c =300;

if(true){
    // let a = 10;
    // console.log(`a: ${a}`);
    // const b = 20;
    // console.log(`b: ${b}`)
    c = 30;
}

// console.log(c);



function one(){
    const username ='paresh';

    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website)

    two();
}

// one();

if(true){
    const username = 'paresh';
    if(username === 'paresh'){
        const website = ' youtube'
        console.log(username+website);
    }

    // console.log(website)
}

// console.log(username)

//normal function declaration

console.log(addOne(8))
function addOne(num){
    return num + 1;
}

//function expression
addTwo(4)
const addTwo = function addTwo(num){
    return num + 2;
}