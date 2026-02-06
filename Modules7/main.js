// ### 7.2 În fișierul **main.js** importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.

import { adunare, scadere } from "./mathUtils.js"

console.log(adunare(1, 2))
console.log(scadere(1, 2))

// ### 7.4 În fișierul **main.js** importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.

import salutari from "../salutari.js"

salutari()

// ### 7.6 În fișierul **main.js** importați întregul modul și accesați valorile exportate.

import * as date from "./dateUtilizator.js"

console.log(date.name, date.surname, date.age)

