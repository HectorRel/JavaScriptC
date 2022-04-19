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

const age = 17;
const legalAge = 18;

if (age >= legalAge) {
    console.log("You are legal.");
} else {
    console.log(`You need ${legalAge - age} more years to be able to drive.`);
}