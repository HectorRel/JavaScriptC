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

// Coding Challenge #1
