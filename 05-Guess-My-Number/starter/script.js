'use strict';
const randomizeNum = function() {
    return Math.round(Math.random()*20);
}
let numToGuess = randomizeNum();
let score = Number (document.querySelector('.score').textContent);
let highscore = Number (document.querySelector('.highscore').textContent);
console.log(numToGuess);

//Managing Check boton
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (guess === numToGuess){
        document.querySelector('.message').textContent = 'Correct number!!!!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = `${numToGuess}`;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = `${highscore}`;
        }
    } else if(guess > numToGuess && guess <= 20) {
        document.querySelector('.message').textContent = 'Too high!';
        score -= 1;
    } else if(guess < numToGuess && guess <= 20) {
        document.querySelector('.message').textContent = 'Too low!';
        score -= 1;
    } else {
        document.querySelector('.message').textContent = 'Between 1 and 20'
    }
    document.querySelector('.score').textContent = `${score}`;
});

//Managing Again boton
document.querySelector('.again').addEventListener('click', function() {
    numToGuess = randomizeNum();
    score = 20;
    console.log(numToGuess);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
});