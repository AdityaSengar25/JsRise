let randonNum = parseInt(Math.random()*100+1);
// console.log(randonNum)

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let numguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        ValidateGuess(guess);
    });
}

function ValidateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess>100){
        alert("Please enter a number between 1 and 100");
    }
    else if(guess<1){
        alert("Please enter a number between 1 and 100");
    }
    else{
        if(numguess===10){
            displayguess(guess);
            displaymessage(`Game Over! The number was ${randonNum}`);
            endgame();
           }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess===randonNum){
        displaymessage("Congratulations! You guessed the number!");
        endgame();
    }
    else if(guess>randonNum){
        displaymessage("Your guess is too high");
    }
    else{
        displaymessage("Your guess is too low");
    }
}

function displayguess(guess){
    UserInput.value='';
    guesses.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML= `${11-numguess}`;
}

function displaymessage(message){
   lowOrHi.innerHTML = `${message}`;
}


function endgame(){
    UserInput.value ='';
    UserInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 class="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newgame();
}

function newgame(){
    const newgamebutton=document.querySelector('.newGame')
    newgamebutton.addEventListener('click',()=>{
        randonNum= parseInt(Math.random()*100+1);
        numguess=1;
        guesses.innerHTML='';
        remaining.innerHTML=`${11-numguess}`;
        UserInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playgame=true;
    });
}