
import { adunare, scadere } from "./mathUtils.js";
import saluta from "./salutari.js";
import * as dateUtilizator from "./dateUtilizator.js";

// Folosirea funcțiilor de calcul
console.log("Suma:", adunare(10, 5)); 
console.log("Diferenta:", scadere(10, 5)); 

// Folosirea funcției de salut
saluta("Livia");

// Accesarea datelor utilizatorului
console.log("Nume utilizator:", dateUtilizator.nume);
console.log("Oraș:", dateUtilizator.oras);
console.log("Info utilizator:", dateUtilizator.afiseazaInfo());
