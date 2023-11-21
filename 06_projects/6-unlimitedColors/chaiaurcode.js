const changeColor = function (){
    let color = '#';
    let hex = 'ABCDEF0123456789'

    for(let i = 0; i < 6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }

    return color;
}

let intervalId ;

let changeMe = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }

    function changeBgColor (){
        document.body.style.backgroundColor = changeColor(); 
    }     
}

let stopMe = function(){
    clearInterval(intervalId)
}


document.querySelector('#start').addEventListener('click',changeMe)
document.querySelector('#stop').addEventListener('click',stopMe)