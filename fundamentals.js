import { salutari } from "./salutari.js";

var numar = 5;
let string = "55";
const adev = true;

function titlu(param) {
  return typeof param;
}
console.log(titlu(true));

let strNR = String(numar);
let nrSTR = Number(string);
console.log(strNR);
console.log(nrSTR);

const nume = "Cristi";
const varsta = 20;
console.log(`Ma numesc ${nume} si am ${varsta} ani`);

let a = 7;
let b = 5;
let temp = a;
a = b;
b = temp;

function nullUnd(vari) {
  return vari == null || vari == undefined;
}
console.log(nullUnd(null));

const eu = {
  nume: "Stamatov",
  varsta: 21,
  student: true,
};
eu.oras = "Cantemir";
delete eu.student;

const myArray = ["eu", 21, true, ["Saab", "Volvo", "BMW"]];
for (let i = 0; i < myArray.length; i++) {
  console.log(typeof myArray[i]);
}

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 2));

function ariadrept(latimea, inaltimea = 1) {
  return inaltimea * latimea;
}
console.log(ariadrept(16));

const patrat = function (a) {
  return a ** 2;
};
console.log(patrat(5));

const nrCarac = (str) => {
  let capsat = str.toUpperCase();
  return str.length;
};
console.log(nrCarac("Cristian"));

function principala(nr) {
  let dublu = () => nr * 2;
  let patratul = () => nr ** 2;
  return {
    dublulNumarului: dublu(),
    patratulNumarului: patratul(),
  };
}
console.log(principala(3));

let arrowfunc = (a, b) => a + b;
console.log(arrowfunc(5, 5));

const adunare = (nr) => nr + 1;
function stand(arr, functie) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = functie(arr[i]);
  }
  return arr;
}
const arayul = [2, 3, 4, 5];
console.log(stand(arayul, adunare));

let masina = {
  marca: "Opel",
  model: "Grandland",
  an: 2024,
};
console.log(masina.marca, masina.model);
console.log(masina["marca"], masina["an"]);
masina.culoare = "Negru";
masina.an = 2025;
delete masina.model;

for (let key in masina) {
  console.log(key + ": " + masina[key]);
}

masina.descriere = function () {
  return `Masina este ${this.marca}, ${this.an}, ${this.culoare}`;
};
console.log(masina.descriere());

function persoana(pers) {
  return `Te numesti ${pers.nume}, si ai ${pers.varsta} ani.`;
}
let pers = {
  nume: "Max",
  varsta: 19,
};
console.log(persoana(pers));

console.log("culoare" in masina);

let casa = {
  adresa: {
    strada: "Trandafirilor",
    oras: "Cantemir",
  },
};

function creareObiect(nume, varsta, nota) {
  let student = {
    nume: nume,
    varsta: varsta,
    nota: nota,
  };
  return student;
}
console.log(creareObiect("Cristi", 21, 10));

const cloneMasina = {};
Object.assign(cloneMasina, masina);
const clone2Masina = { ...cloneMasina };
console.log(clone2Masina);

const calculator = {
  adunare: (a, b) => a + b,
  scadere: (a, b) => a - b,
  inmultire: (a, b) => a * b,
  impartire: (a, b) => a / b,
};
console.log(calculator.adunare(2, 5));

let { marca, an } = masina;
console.log(marca);

let array = ["Cantemir", "Chisinau", "Cahul"];
console.log(array[0], array[array.length - 1]);
array.push("Balti");
array.unshift("Orhei");
array.pop();
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const animale = ["Maimuta", "Caine", "Pisica"];
animale.forEach((el) => console.log(`eu am ${el}`));

let maiMare10 = (arr) => arr.filter((el) => el > 10);
let numere = [5, 12, 8, 3, 20, 3, 1];
console.log(maiMare10(numere));

let sortat = [...numere].sort((a, b) => a - b);

const sqr = (arr) => arr.map((el) => el ** 2);
console.log(sqr(numere));

const suma = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
console.log(suma(numere));

console.log(numere.includes(10));
console.log(animale.indexOf("Pisica"));

let concatenat = [...animale, ...arayul];
let canc = animale.concat(arayul);
console.log(canc);

const bidiarr = [
  [11, 22],
  [33, 44],
];
console.log(bidiarr[0][1]);

function elimdublicat(arr) {
  let rez = [];
  arr.forEach((el) => {
    if (!rez.includes(el)) {
      rez.push(el);
    }
  });
  return rez;
}
console.log(elimdublicat(numere));

console.log(sortat.slice(2, sortat.length));
console.log(sortat);
console.log(sortat.splice(2, 1));

setTimeout(() => {
  console.log("Timer activat");
}, 3000);

for (let i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

function salut(funcback) {
  console.log("Buna ziua");
  funcback();
}
function callback() {
  console.log("Papa");
}
salut(callback);

function douaSecunde() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Indeplinnit cu succes");
    }, 2000);
  });
}
function major(varsta) {
  return new Promise((resolve, reject) => {
    console.log("Se verifica varsta...");
    setTimeout(() => {
      if (varsta >= 18) {
        resolve("Acceptat");
      } else {
        reject("Respins");
      }
    }, 2000);
  });
}
major(20)
  .then((mesaj) => console.log(mesaj))
  .catch((eroare) => console.log(eroare));

async function afisareSalut() {
  salutari("Mihai");
}
afisareSalut();

function promiseOne() {
  return new Promise((resolve) => {
    console.log("Se incarca promisiuni...");
    setTimeout(() => {
      resolve("Promise 1");
    }, 1500);
  });
}
function promiseTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 1500);
  });
}
function promiseThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 1500);
  });
}

async function promiseRun() {
  await promiseOne().then((mesaj) => console.log(mesaj));
  await promiseTwo().then((mesaj) => console.log(mesaj));
  await promiseThree().then((mesaj) => console.log(mesaj));
}

promiseRun();

async function getComents() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
  );
  const data = await response.json();
  console.log(data);
}
getComents();

const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("*** Response 1 ***");
  }, 1500);
});
const pr2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("*** Response 2 ***");
  }, 1500);
});
const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("*** Response 3 ***");
  }, 1500);
});
Promise.all([pr1, pr2, pr3]).then((mesaj) => {
  console.log("Resolved:", mesaj);
});
Promise.allSettled([pr1, pr2, pr3]).then((mesaj) => {
  console.log("Resolved:", mesaj);
});
