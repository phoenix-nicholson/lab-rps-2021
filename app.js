import { didUserWin, getRandomRoll } from './utils.js';
// import functions and grab DOM elements
const playButton = document.getElementById('play-btn');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const tieSpan = document.getElementById('ties');
// initialize global state
let wins = 0;
let losses = 0;
let ties = 0;
// set event listeners
playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    // console.log(selected);
    const userRoll = selected.value;
    // console.log(userRoll);
    const actualRoll = getRandomRoll();

    if (userRoll === actualRoll){
        ties++;
    }

    else if (didUserWin(userRoll, actualRoll)){
        wins++;
    } else {
        losses++;
    } 
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    tieSpan.textContent = ties;
// console.log('hello')
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
