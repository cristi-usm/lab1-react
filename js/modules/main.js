// 8.2 În fișierul main importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
import {sum, dif} from "./mathUtils.js";

// 8.4 În fișierul main importați funcia cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
import hello from "./salutari.js";

// 8.6 În fișierul main importați întregul modul și accesați valorile exportate.
import * as data from "./userData.js";

console.log("Suma numerelor " + sum(15,89));
console.log("Diferenta numerelor " + dif(15,89));

hello();

console.log(`My name is ${data.nume} ${data.prenume} and I am ${data.age} years old.`);

