export const numeUtilizator = "Andrei Ionescu";

export const varsta = 28;

export const setariProfil = {
    tema: "dark",
    limba: "română",
    notificari: true
};

export const roluri = ["admin", "editor", "user"];

export function afiseazaStatus() {
    return `${numeUtilizator} este online.`;
}

import * as User from './dateUtilizator.js';

console.log("--- Date Utilizator ---");
console.log(`Nume: ${User.numeUtilizator}`);
console.log(`Vârstă: ${User.varsta}`);

console.log(`Tema aleasă: ${User.setariProfil.tema}`);
console.log(`Primul rol: ${User.roluri[0]}`);

console.log(`Status: ${User.afiseazaStatus()}`);