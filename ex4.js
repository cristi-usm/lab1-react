//4.1
const orase = ["Amsterdam", "Roma", "Paris"];
console.log("Primul oras:", orase[0]);
console.log("Ultimul oras:", orase[orase.length -1]);

//4.2
orase.push("Berlin");
orase.unshift("Madrid");
orase.pop();
console.log("Afisati orasele:", orase);

//4.3
const culori = ["alb", "rosu", "galben", "verde"];
for (let i = 0; i < culori.length; i++) {
    console.log(`Culoare: ${culori[i]}`);
}

//4.4
const animale = ["câine", "pisică", "iepure"];

animale.forEach(animal => {
    console.log(`Animalul preferat este: ${animal}`);
});

//4.5
function numereMari(arr) {
    return arr.filter(num => num > 10);
}

const numere = [5, 12, 8, 25, 3, 15];
console.log("Numere mai mari de 10:", numereMari(numere));

//4.6
const numereSortate = [42, 7, 15, 3, 20];
numereSortate.sort((a, b) => a - b);
console.log("Array sortat:", numereSortate);

//4.7
const numereInitiale = [2, 5, 7, 9, 3];
const patratele = numereInitiale.map(nr => nr * nr);
console.log("Patratele nr:", patratele);

//4.8
const valori = [10, 20, 30, 40];
const suma = valori.reduce((total, valoare) => total + valoare, 0);
console.log("Suma elementelor:", suma);

//4.9
const fructe = ["mere", "pere", "banane", "cireșe"];

console.log(fructe.includes("banane")); 
console.log(fructe.includes("portocale")); 

console.log(fructe.indexOf("banane") !== -1); 
console.log(fructe.indexOf("portocale") !== -1); 

//4.10
const array1 = ["Salut", "din"];
const array2 = ["Moldova", "!"];

const rezultat1 = array1.concat(array2);
console.log(rezultat1);

const rezultat2 = [...array1, ...array2];
console.log(rezultat2);

//4.11
const matrice = [
    [1, 2],
    [3, 4]
];
console.log("Elementul de pe linia 1, coloana 2:", matrice[0][1]); // 2

//4.12
function eliminaDuplicate(arr) {
    return [...new Set(arr)];
}

const numerre = [1, 2, 3, 3, 4, 4, 5];
console.log("Array fără duplicate:", eliminaDuplicate(numerre));

//4.13
const numere2 = [10, 20, 30, 40, 50];

const subArray = numere2.slice(1, 4); 
console.log("Sub-array:", subArray);

numere2.splice(2, 1);
console.log("Array după eliminarea elementului:", numere2);




