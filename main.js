// 7.2 Importarea funcțiilor matematice

import { adunare, scadere } from "./mathUtils.js";

let suma = adunare(10, 5);
let diferenta = scadere(10, 5);

console.log("Suma:", suma);
console.log("Diferența:", diferenta);

// 7.4 Importarea funcției de salut

import salutaUtilizator from "./salutari.js";

salutaUtilizator();

// 7.6 Importarea întregului modul

import * as date from "./dateUtilizator.js";

console.log("Nume:", date.nume);
console.log("Vârsta:", date.varsta);
console.log("Oraș:", date.oras);