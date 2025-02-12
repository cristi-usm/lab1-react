import {adunare,scadere} from "./mathUtils.js";
import {salut,salutNume} from "./salutari.js";
import * as dateUtilizator from "./dateUtilizator.js";

console.log(adunare(2,4));
console.log(scadere(4,3));

salut();
salutNume("Ion");

console.log(`Nume: ${dateUtilizator.nume}`);
console.log(`Vârstă: ${dateUtilizator.varsta}`);
console.log(`Oraș: ${dateUtilizator.oras}`);

dateUtilizator.afiseazaUtilizator();
