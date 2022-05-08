'use strict';
const randomizeNum = function () {
    return (Math.trunc(Math.random() * 20)) + 1;
}
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const changeBackColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}
let numToGuess = randomizeNum();
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let winCheck = false;
console.log(numToGuess);

//Managing Check boton
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When player wins
    if (guess === numToGuess) {
        displayMessage('Correct number!!!!');
        changeBackColor('#60b347');
        document.querySelector('.number').textContent = `${numToGuess}`;
        winCheck = true;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = `${highscore}`;
        }
        //When number is diferent than guess
    } else if (guess !== numToGuess && guess <= 20 && guess >= 1 && !winCheck) {
        score--;
        displayMessage(guess > numToGuess ? 'Too high!' : 'Too low!');
        if (score >= 1) {
            document.querySelector('.score').textContent = `${score}`;
        } else if (score < 1) { //When player loses
            changeBackColor('#B20000');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').style.width = '70rem';
            document.querySelector('.number').textContent = 'Game over ☠';
            displayMessage("Press Again! to restart");
        }
    } else if ((guess > 20 || guess < 1) && !winCheck) {
        displayMessage('Between 1 and 20');
    }
});
//Managing Again boton
document.querySelector('.again').addEventListener('click', function () {
    numToGuess = randomizeNum();
    score = 20;
    winCheck = false;
    console.log(numToGuess);
    changeBackColor('#222');
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').style.width = '15rem';
});