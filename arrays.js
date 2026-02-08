//4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
console.log("4.1");
const cities = ["Madrid", "Budapest", "Lofoten"];
console.log(cities[0], cities[2]);
console.log("-----------------");

//4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
console.log("4.2");
cities.push("Strasbourg");
cities.unshift("Minsk");
console.log(cities);
cities.pop();
console.log(cities);
console.log("-----------------");

//4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element.
console.log("4.3");
const colors = ["blue", "yellow", "red", "green", "purple", "pink"];
for (color of colors) {
  console.log(color);
}
console.log("-----------------");

//4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
console.log("4.4");
const animals = ["wolf", "bear", "fox", "cat", "worm"];
const adjectives = ["sleepy", "fat", "small", "cute", "long"];
animals.forEach((an, index) => {
  console.log(`This ${an} is ${adjectives[index]}`);
});
console.log("-----------------");

//4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.
console.log("4.5");
const arrFunc = (arr) => {
  arr.forEach((n) => {
    if (n > 10) {
      return console.log(n);
    }
  });
};

arrFunc([3, 12, 1, 45, 10, 23, 9, 7, 47]);
console.log("-----------------");

//4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
console.log("4.6");
const nums = [6, 3, 23, 11, 89, 56, 32, 53, 86, 4, 5, 1];
nums.sort((a, b) => {
  return a - b;
});
console.log(nums);
console.log("-----------------");

//4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.
console.log("4.7");
const newNums = nums.map((el) => {
  return el * el;
});

console.log(newNums);
console.log("-----------------");

//4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.
console.log("4.8");
const array = [6, 89, 3, 2];
const sumReduce = array.reduce((acc, currVal) => acc + currVal, 0);

console.log(sumReduce);
console.log("-----------------");

//4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.
console.log("4.9");
const choco = ["white", "milk", "dark"];

console.log(choco.includes("pistachio"));
console.log(choco.indexOf("milk"));
console.log("-----------------");

//4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).
console.log("4.10");
const cereals = ["wheat", "maize", "rice"];
const milk = ["soya", "almond", "oat", "coconut"];
const combined = cereals.concat(milk);
console.log(combined);
console.log("-----------------");

//4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.
console.log("4.11");
const matrix = [
  [3, 6],
  [4, 9],
];
console.log(matrix[0][1]);
console.log("-----------------");

//4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
console.log("4.12");
const noDuplicates = (arr) => {
  const set = new Set(arr);
  return console.log(set);
};
noDuplicates([8, 8, 9, 4, 4, 6, 2, 4]);
console.log("-----------------");

//4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.
console.log("4.13");
const pieces = [7, 5, 3, 9, 18, 23, 11];
console.log(pieces.slice(1, 5));
console.log(pieces.splice(2, 1));
console.log("-----------------");
