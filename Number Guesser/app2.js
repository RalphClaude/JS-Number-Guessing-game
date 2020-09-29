/*
game function:
-Player must guess numeber between a min and max
-Player gets a certain amount a guesses
-Notify player of guesses remaining 
-Notify the player of the correct answer if loose 
-let player choose to play again 
*/


//The values 

// object orentented programming (OOP) is having functions and calling them within javascript
let minNum = 1,
    maxNum = 12,
    winningNum = 7,
    guessesLeft = 3;

//UI elements 
const gameEl = document.querySelector('#game'),
    minNumEl = document.querySelector('.min-num'),
    maxNumEl = document.querySelector('.max-num'),
    guessBtnEl = document.querySelector('#guess-btn'),
    guessInputEl = document.querySelector('#guess-input'),
    messageEl = document.querySelector('.message');
    
//Assign the Min and MAX;
minNumEl.textContent = minNum;
maxNumEl.textContent = maxNum;

//Listen for guess
guessBtnEl.addEventListener('click', function (){
    let userNumGuess = parseInt(guessInputEl.value);
    console.log(userNumGuess);

    //Validation check to ensure given number is not between the bounds that I have set
    validateGivenNum(userNumGuess, minNum, maxNum);

    //Next I want to compare if the given number is equal to the winning number
    winCheck(userNumGuess, winningNum, guessInputEl);

    // // Check if won 

});

//Demonsrtate knowledge of object orentented programming (OOP) by creating a function check if the user won


//Set message

//Virbal: Function setMessage gave the ablility to insert the input text and style color of the update message
function setMessage(msg, color) {
    messageEl.style.color = color;
    messageEl.textContent = msg;
}

function winCheck(guess, winningNum, guessInput) {
    if (guess === winningNum) {
        //disable input
        guessInput.disable = true;
        //chang border color
        guessInput.style.borderColor = 'green';

        guessInput.style.border = '1px linear';
        //Set message
        setMessage(`${winningNum} is correct!, You win`, 'green')
    } else {

        //wrong number
        setMessage(`wrong! try again`, 'red');
    }

};

//Write a fucuntion for checking if the If statement works if the given number within the bounds

function validateGivenNum(guess,min,max){

    if (isNaN(guess) || guess < min || guess > max) {
       
    };

    setMessage(`Please enter a number between ${min} and ${max}`, 'RoyalBlue');
}