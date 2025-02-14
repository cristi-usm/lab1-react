import { adunare, scadere } from './mathUtils.js';

const num1 = 52;
const num2 = 22;

const suma = adunare(num1, num2);
const diferenta = scadere(num1, num2);

console.log(`${num1} + ${num2} = ${suma}`);
console.log(`${num1} - ${num2} = ${diferenta}`);


import salut from './salutari.js';

salut("Marin"); 



import * as dateUtilizator from './dateUtilizator.js';

console.log(`Nume: ${dateUtilizator.nume}`);
console.log(`Vârstă: ${dateUtilizator.varsta}`);
console.log(`Email: ${dateUtilizator.email}`);
