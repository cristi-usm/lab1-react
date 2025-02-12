// 4.1
const orase = ["Iasi", "Bucuresti", "Brasov"];

console.log(orase[0]);
console.log(orase[2]);

// 4.2

orase.unshift("Cluj");
orase.push("Arad");
orase.pop();
console.log(orase);

// 4.3
const culori = ["Negru", "Alb", "Albastru", "Verde"];
for (const element of culori) {
  console.log(element);
}

// 4.4

const animale = ["pisica", "caine", "cal", "leu", "bou"];

const result = animale.forEach((element) =>
  console.log(`Acest animal este ${element}`)
);

// 4.5
function isBig(value) {
  return value >= 10;
}

const arrNr = [2, 4, 60, 55, 8, 9, 23, 10, 14, 1, 3, 89, 16].filter(isBig);

console.log(arrNr);

// 4.6
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
array.sort();

console.log(array);

// 4.7

const array2 = [55, 45, 33, 16, 6, 31];

const map = array2.map((x) => x * x);

console.log(map);

// 4.8

const array3 = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array3.reduce((acc, curr) => acc + curr, initialValue);

console.log(sumWithInitial);

// 4.9

console.log(orase.includes("Iasi"));
console.log(array2.includes(16));
console.log(orase.indexOf("Bucuresti"));
console.log(array.indexOf(5));

// 4.10

const arr10 = ["a", "b", "c", "d"];
const arr11 = [0, 1, 2, 3];

const arr12 = arr10.concat(arr11);

const arr13 = [...arr10, ...arr11];

console.log(arr12);
console.log(arr13);

// 4.11

const matrice = [
  [1, 2],
  [3, 4],
];

console.log(matrice[0][1]);

// 4.12
let a = [10, 20, 20, 30, 16, 16];
const resultA = a.filter((item, index) => a.indexOf(item) === index);

console.log(resultA);

// 4.13

const fructe = ["banana", "capsuna", "rodie", "mandarine", "cocos", "ananas"];

const resultFructe = fructe.slice(1, 3);

console.log(resultFructe);

const arr5 = [10, 20, 30, 40, 50];

arr5.splice(2, 1);

console.log(arr5);
