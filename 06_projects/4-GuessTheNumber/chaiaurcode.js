let randomNumber =  parseInt(Math.random()*100+1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let gussesSlot = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHigh = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        // console.log(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }else if(guess < 1){
        alert('Please enter a number more than one')    
    }else if(guess > 100){
        alert('Please enter a number smaller than hundred')    
    }else{
        prevGuesses.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over !, Random Number: ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage(`You guess Right`)
            endGame()
        }else if(guess < randomNumber){
            displayMessage(`Number is to low`)
        }else if(guess > randomNumber){
            displayMessage(`Number is to high`)
        }
}

function displayGuess(guess){
        userInput.value = '';
        gussesSlot.innerHTML += `${guess},`;
        numGuess++;
        lastResult.innerHTML = `${11- numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2` 
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newBtn = document.getElementById("newGame");

    newBtn.addEventListener("click",function(){
        randomNumber =  parseInt(Math.random()*100+1);
        prevGuesses = [];
        numGuess = 1;
        gussesSlot.innerHTML = '';
        lastResult.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    });
}