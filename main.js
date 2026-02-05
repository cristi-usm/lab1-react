// ### 7.2 În fișierul **main.js** importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
import { adunare, scadere } from "./mathUtils.js";
adunare(5, 3);
scadere(5, 3);

// ### 7.4 În fișierul **main.js** importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
import Hey from "./salutari.js";
Hey()

// ### 7.6 În fișierul **main.js** importați întregul modul și accesați valorile exportate.
import { userData } from "./dateUtilizator.js";
console.log(userData.name);
console.log(userData.age);
console.log(userData.email);