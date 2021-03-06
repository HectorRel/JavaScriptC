/* //LECTURE: Values and Variables 
const country = 'Mexico';
const continent = 'America';
let population = 131;

console.log(country);
console.log(continent);
console.log(population);


//LECTURE: Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

//LECTURE: let, const and var
language = "Spanish";

//LECTURE: Basic Operators
let halfPopulation = population / 2;
halfPopulation++;
console.log(halfPopulation);

const populationFinland = 6;
console.log(halfPopulation > populationFinland);

const averagePopulation = 33;
console.log(averagePopulation > halfPopulation);

// const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;

//LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

//LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
} 
//LECTURE: The Conditional (Ternary) Operator
const population = 20;
console.log(`Mexico's population is ${population > 33 ? 'above' : 'below'} average.`);
*/