'use strict';
/* // LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}
const firstCall = describeCountry('Mexico', 130, 'CDMX');
const secondCall = describeCountry('Canada', 30, 'Otawa');
const thirdCall = describeCountry('USA', 350, 'Washington');

console.log(firstCall);
console.log(secondCall);
console.log(thirdCall); */

/* //LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

let percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld1(300), percentageOfWorld1(50), percentageOfWorld1(5000));
console.log(percentageOfWorld2(500), percentageOfWorld2(30), percentageOfWorld2(3000)); */

/* // LECTURE: Arrow Functions
const percentageOfWorld3 = population => population / 7900 * 100;
console.log(percentageOfWorld3(3000)); */

/* // LECTURE: Functions Calling Other Functions

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

function describePopulation(country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
}
console.log(describePopulation('Mexico', 350));
console.log(describePopulation('Canada', 5000));
console.log(describePopulation('Peru', 1000)); */

/* // Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= (scoreKoalas * 2)) {
        return `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`;
    } else if (scoreKoalas >= (scoreDolphins * 2)) {
        return `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`;
    }
}
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas)); */

/* //LECTURE: Introduction to Arrays
const populations = [300, 5000, 3000, 40];
console.log(populations.length == 4);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages); */

/* //LECTURE: Basic Array Operations (Methods)
const neighbours = ['USA', 'Guatemala', 'Belice'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

!neighbours.includes('Germany') ? console.log('Probably not a central European Country :D') : console.log(false);

neighbours[neighbours.indexOf('USA')] = 'United States of America';
console.log(neighbours); */

/* //Coding Challenge #2
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15;
    } else {
        return bill * .2;
    }
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals); */

/* //LECTURE: Introduction to Objects
 const myCountry = {
    country: 'Mexico',
    capital: 'CDMX',
    language: 'Spanish',
    population: 131,
    neighbours: ['USA', 'Guatemala', 'Belice']
}; */

/* //Challenge Objects video
const jonas = {
    firstName: 'Jonas',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); */

/* //LECTURE: Dot vs. Bracket Notation
const myCountry = {
    country: 'Mexico',
    capital: 'CDMX',
    language: 'Spanish',
    population: 131,
    neighbours: ['USA', 'Guatemala', 'Belice']
};

myCountry.population += 2;
myCountry['population'] -= 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`); */

