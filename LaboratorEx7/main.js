import {adunare, scadere} from './mathUtils.js';
import functiaAfiseazaSalut from './salutari.js';
import * as DateUtilizator from './dateUtilizator.js';

console.log(adunare(2, 4));
console.log(scadere(3, 1));

console.log(functiaAfiseazaSalut("Elena"));

console.log("Date Utilizator");
console.log("Nume:", DateUtilizator.numeUtilizator);
console.log("Vârstă:", DateUtilizator.varsta);
console.log("Email:", DateUtilizator.email);
console.log("Oraș:", DateUtilizator.oras);



