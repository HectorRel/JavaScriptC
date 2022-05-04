'use strict';
/*const message = document.querySelector('.message').textContent;
console.log(message);
document.querySelector('.message').textContent = 'holi crayoli';
document.querySelector('.number').textContent = '20';
console.log(document.querySelector('body').style.backgroundColor = 'green');

const input = document.querySelector('.guess').value;
console.log(input); */

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    if (guess === 15){
        document.querySelector('.message').textContent = 'Correct number!!!!';
        document.querySelector('body').style.backgroundColor = 'green';
    }
});
