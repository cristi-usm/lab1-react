//7.2 În fișierul main.js importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
import { adunare, scadere } from "./mathUtils.js";
import salutDefault from "./salutari.js";
import * as user from "./dateUtilizator.js";

console.log(adunare(44, 93));
console.log(scadere(197, 3));

//7.4 În fișierul main.js importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
//7.6 În fișierul main.js importați întregul modul și accesați valorile exportate.
salutDefault(user.name[2]);
console.log(user.age[1]);
console.log(user.country[3]);
