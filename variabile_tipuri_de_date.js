//1.1 Declarați trei variabile utilizând var, let, și const. Atribuiți-le valori de tip number, string și boolean
var price = 20;
let country = "Sweden";
const isHappy = true;

//1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând typeof.
console.log("1.2");
function firstFunc(el) {
  return console.log(typeof el);
}

firstFunc(17);
console.log("-----------------");

//1.3 Convertiți o valoare de tip string în number și invers. Exemplu: "123" → 123 și 456 → "456".
console.log("1.3");
let str = "332";
console.log(typeof str);
let strToNumber = parseInt(str);
console.log(typeof strToNumber);

let nmbr = 404;
console.log(typeof nmbr);
let nmbrToString = nmbr.toString();
console.log(typeof nmbrToString);

console.log("-----------------");

//1.4 Declarați două variabile (nume, varsta) și creați o propoziție utilizând șabloane de string-uri (template literals - ``).
console.log("1.4");
let name = "Maria";
let age = 23;
console.log(`${name} is ${age} years old`);
console.log("-----------------");

//1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
console.log("1.5");

let temp;
let count = 33;
let total = 10;

console.log("Before:");
console.log("count =", count);
console.log("total =", total);

temp = count;
count = total;
total = temp;

console.log("After:");
console.log("count =", count);
console.log("total =", total);
console.log("-----------------");

//1.6 Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.
console.log("1.6");
function verify(el) {
  if (el === null || el === undefined) {
    console.log(`The variable is ${typeof el}`);
  } else {
    console.log("Secured");
  }
}
let bup;
verify(bup);
console.log("-----------------");

//1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.
console.log("1.7");
const box = {
  contents: "ice cream",
  count: 213,
  packed: true,
};
console.log("Initial object");

for (prop in box) {
  console.log(prop);
}
console.log("");

console.log("Add to object");
box.manufacturer = "Moments";
for (prop in box) {
  console.log(prop);
}
console.log("");
console.log("Delete from object");
delete box.packed;
for (prop in box) {
  console.log(prop);
}
console.log("-----------------");

//1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
console.log("1.8");
const bundle = [6, true, "burger", 9007199254740991n, null];
let n = 1;
bundle.forEach((el) => {
  console.log(n, typeof el);
  n++;
});
console.log("-----------------");
