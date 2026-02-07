import { adunare, scadere } from './mathUtils.js';

const nr1 = 25;
const nr2 = 10;

const suma = adunare(nr1, nr2);
const diferenta = scadere(nr1, nr2);

console.log(`Numerele utilizate: ${nr1} și ${nr2}`);
console.log(`Suma rezultată: ${suma}`);
console.log(`Diferența rezultată: ${diferenta}`);

import genereazaSalut from './salutari.js';

const numeUtilizator = "Andrei";

genereazaSalut(numeUtilizator);