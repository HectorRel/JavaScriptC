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

/* //Challenge Methods video
const hector = {
    firstName: 'Hector',
    birthYear: 1996,
    job: 'Programmer',
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        this.calcAge();
        this.hasDriversLicense = this.age >= 18 ? true : false;
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}


console.log(hector.getSummary()); */

/* //Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const jhon = {
    fullName: 'Jhon Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

console.log(mark.calcBMI(), jhon.calcBMI());
mark.calcBMI();
jhon.calcBMI();

if (mark.BMI > jhon.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${jhon.fullName}'s (${jhon.BMI})!`);
} else if (jhon.BMI > mark.BMI) {
    console.log(`${jhon.fullName}'s BMI (${jhon.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
} else {
    console.log(`Both ${mark.fullName} and ${jhon.fullName} have the same BMI (${mark.BMI})!`);
} */

/* //LECTURE: Object Methods
const myCountry = {
    country: 'Mexico',
    capital: 'CDMX',
    language: 'Spanish',
    population: 131,
    neighbours: ['USA', 'Guatemala', 'Belice'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland); */

/* //LECTURE: Iteration: The for Loop
for (let i = 0; i < 50; i++) {
    console.log(`Voter number ${i + 1} is currently voting`);
} */

/* // LECTURE: Looping Arrays, Breaking and Continuing
const populations = [300, 5000, 3000, 40];
const percentages2 = [];
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2); */

/* //LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(i);
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
        console.log(i, j);
    }
} */

// LECTURE: The while Loop
const populations = [300, 5000, 3000, 40];
const percentages3 = [];
let i = 0;

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);

while (i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages3);