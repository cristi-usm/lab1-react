import { adunare, scadere } from './mathUtils.js';
import { salutare } from './salutari.js';
import * as dateUtilizator from './dateUtilizator.js';

const suma = adunare(5,2);
const diferenta = scadere(7,2);



export function afisare() {
    console.log(suma);
}

export function salutareUtilizator(name) {
    salutare(name);
}

export function afisareDateUtilizator() {
    console.log(dateUtilizator.salut());
}