/*
game function:
-Player must guess numeber between a min and max
-Player gets a certain amount a guesses
-Notify player of guesses remaining 
-Notify the player of the correct answer if loose 
-let player choose to play again 
*/
//The values 

// object orentented programming (OOP) is havving functions and calling it within java script
let minNum = 1,
    maxNum = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements 
const gameEl = document.querySelector('#game'),
    minNumEl = document.querySelector('.min-num'),
    maxNumEl = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    UserNumInputEl = document.querySelector('#guess-input'),
    messageEl = document.querySelector('.message');
    
//Assign the Min and MAX;
minNumEl.textContent = minNum;
maxNumEl.textContent = maxNum;

//Listen for guess
guessBtn.addEventListener('click', function (){
    let UserNumGuess = parseInt(UserNumInputEl.value);
    console.log(UserNumGuess);
    //Validate 

    //if any number that is less then or greater then the number of guess then it will not be a number (NaN)

    //Validation check to ensure given number is not between the bounds that I have set
    CheckGivNum(UserNumGuess, minNum, maxNum);

    //Virbal: if isNAN returns True or(||) the guess number is less then the min guess or(||) guess is greater then the max guess, say the message
   

    //Next I want to check the winning number, if the user still have geuss left UserNumGuess
    WinNum(UserNumGuess, UserNumInputEl, winningNum);
});

//Demonsrtate knowledge of object orentented programming (OOP) by creating a function check if the user won

//Virbal: Function setMessage gave the ablility to insert the input text and style color of the update message
function setMessage(msg, color) {
    messageEl.style.color = color;
    messageEl.textContent = msg;
}
//User can call different function inside 
function WinNum(guess, guessInput, winningNum) {
    //Success check

    //Condition 1 is true
    if(guess === winningNum) {
    guessInput.disable = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct!, You win`, 'Green');


    //Condition 2 
    } else if(guessesLeft > 0) {

    guessesLeft -= 1;
    guessInput.style.borderColor = 'red';
    guessInput.value = '';
    setMessage(`${guess} is wrong! try again, ${guessesLeft 
    +1} guesses left`, 'red');


    //Condition 1 & 2 are false
    } else if(guessesLeft === 0) {
        guessInput.disable = true;
        guessInput.style.borderColor = 'red';
        setMessage(`Out of guesses, game over!`, 'red');
    }
};

//Write a fucuntion for checking if the If statement works if the given number within the bounds

function CheckGivNum(guess,min,max){

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'RoyalBlue');
    };
}