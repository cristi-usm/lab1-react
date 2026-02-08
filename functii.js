//2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
console.log("2.1");
function sum(a, b) {
  return console.log(`Sum = ${a + b}`);
}
sum(3, 7);
console.log("-----------------");

//2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.
console.log("2.2");

function area(l, h = 1) {
  return l * h;
}

console.log("Area =", area(4, 9));
console.log("Area =", area(4));
console.log("-----------------");

//2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
console.log("2.3");
const noName = (el) => {
  return console.log(`The square of ${el} is ${el * el}`);
};
noName(8);
console.log("-----------------");

//2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
console.log("2.4");
const strOp = (str) => {
  console.log(str.toUpperCase());

  const strSplit = [...str];
  let count = 0;
  strSplit.forEach((ch) => {
    count++;
  });

  return console.log(count);
};
strOp("Airflow");
console.log("-----------------");

//2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
console.log("2.5");

function doubledNumber(el) {
  return el * 2;
}

function squareNumber(el) {
  return el * el;
}

function operation(el) {
  const obj = {};
  obj.double = doubledNumber(el);
  obj.sqaure = squareNumber(el);
  console.log(doubledNumber(el));
  console.log(squareNumber(el));

  return console.log(obj);
}

operation(5);
console.log("-----------------");

//2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
console.log("2.6");
const arrowSum = (a, b) => {
  return console.log(`The sum is ${a + b}`);
};
arrowSum(9, 1);
console.log("-----------------");

//2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.
console.log("2.7");
const adding = (el) => {
  return console.log(el + 3);
};

const appFunction = (arr) => {
  arr.forEach((b) => {
    adding(b);
  });
};
appFunction([5, 8, 2, 3, 9, 11]);
console.log("-----------------");
