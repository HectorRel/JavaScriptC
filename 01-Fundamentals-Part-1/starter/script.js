/*let whatIsThis = true;
console.log(whatIsThis);
console.log(typeof whatIsThis);*/

/* //Coding Challenge #1
const markWeight1 = 78;
const markHeight1 = 1.69;
const jhonWeight1 = 92;
const jhonHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const jhonWeight2 = 85;
const jhonHeight2 = 1.76;

const markBMI1 = markWeight1 / (markHeight1 ** 2);
const jhonBMI1 = jhonWeight1 / (jhonHeight1 ** 2);

const markBMI2 = markWeight2 / (markHeight2 ** 2);
const jhonBMI2 = jhonWeight2 / (jhonHeight2 ** 2);

const markHigherBMI1 = markBMI1 > jhonBMI1;
const markHigherBMI2 = markBMI2 > jhonBMI2;

console.log(markBMI1, jhonBMI1);
console.log(markBMI2, jhonBMI2);
console.log(markHigherBMI1);
console.log(markHigherBMI2); */

/*const age = 17;
const legalAge = 18;

if (age >= legalAge) {
    console.log("You are legal.");
} else {
    console.log(`You need ${legalAge - age} more years to be able to drive.`);
} */

/* //Coding challenge #2
const markWeight1 = 78;
const markHeight1 = 1.69;
const jhonWeight1 = 92;
const jhonHeight1 = 1.95;

const markBMI1 = markWeight1 / (markHeight1 ** 2);
const jhonBMI1 = jhonWeight1 / (jhonHeight1 ** 2);

if (markBMI1 > jhonBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${jhonBMI1})!`);
} else {
    if (jhonBMI1 > markBMI1) {
        console.log(`Jhon's BMI (${jhonBMI1}) is higher than Mark's (${markBMI1})!`);
    } else {
        console.log(`Mark's and Jhon's BMI is the same (${jhonBMI1})`);
    }
} */

//Coding Challenge #3
const scoreDolphin1 = (96 + 108 + 89) / 3;
const scoreDolphin2 = (97 + 112 + 101) / 3;
const scoreDolphin3 = (97 + 112 + 101) / 3;

const scoreKoalas1 = (88 + 91 + 110) / 3;
const scoreKoalas2 = (109 + 95 + 123) / 3;
const scoreKoalas3 = (109 + 95 + 106) / 3;

//First score
console.log("First score: " + scoreDolphin1 + ' ' + scoreKoalas1);
if (scoreDolphin1 > scoreKoalas1 && scoreDolphin1 >= 100) {
    console.log(`The Dolphin team wins the trophy with a score of ${scoreDolphin1}.`);
} else if (scoreDolphin1 < scoreKoalas1 && scoreDolphin1 >= 100) {
    console.log(`The Koalas team wins the trophy with a score of ${scoreKoalas1}.`);
} else if (scoreDolphin1 === scoreKoalas1 && scoreDolphin1 >= 100) {
    console.log(`There is a draw with a score of ${scoreDolphin1}.`);
} else {
    console.log('No team wins the trophy.');
}
//Second score
console.log("Second score: " + scoreDolphin2 + ' ' + scoreKoalas2);
if (scoreDolphin2 > scoreKoalas2 && scoreDolphin2 >= 100) {
    console.log(`The Dolphin team wins the trophy with a score of ${scoreDolphin2}.`);
} else if (scoreDolphin2 < scoreKoalas2 && scoreDolphin2 >= 100) {
    console.log(`The Koalas team wins the trophy with a score of ${scoreKoalas2}.`);
} else if (scoreDolphin2 === scoreKoalas2 && scoreDolphin2 >= 100) {
    console.log(`There is a draw with a score of ${scoreDolphin2}.`);
} else {
    console.log('No team wins the trophy.');
}
//Third score
console.log("Third score: " + scoreDolphin3 + ' ' + scoreKoalas3);
if (scoreDolphin3 > scoreKoalas3 && scoreDolphin3 >= 100) {
    console.log(`The Dolphin team wins the trophy with a score of ${scoreDolphin3}.`);
} else if (scoreDolphin3 < scoreKoalas3 && scoreDolphin3 >= 100) {
    console.log(`The Koalas team wins the trophy with a score of ${scoreKoalas3}.`);
} else if (scoreDolphin3 === scoreKoalas3 && scoreDolphin3 >= 100) {
    console.log(`There is a draw with a score of ${scoreDolphin3}.`);
} else {
    console.log('No team wins the trophy.');
}