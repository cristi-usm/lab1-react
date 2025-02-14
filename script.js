// 1.1
var numarVar = 100;
var textVar = "Hello!";
var booleanVar = false;

let numarLet = 25.5;
let textLet = "JavaScript";
let booleanLet = true;

const numarConst = 3.14;
const textConst = "Const";
const booleanConst = false;

console.log(numarVar, textVar, booleanVar);
console.log(numarLet, textLet, booleanLet);
console.log(numarConst, textConst, booleanConst);

// 1.2
function tipDeDate(variable) {
    return typeof variable;
}

var numar = 42;
var text = "Hello";
var boolean = true;

console.log(tipDeDate(numar));
console.log(tipDeDate(text));
console.log(tipDeDate(boolean));

// 1.3
let stringToNumber = Number("123");
console.log(stringToNumber);

let numberToString = String(456);
console.log(numberToString);

// 1.4
let nume = "Denis";
let varsta = 20;

let propozitie = `Numele meu este ${nume} și am ${varsta} ani.`;
console.log(propozitie);

// 1.5
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b);

// 1.6
function verificare(val) {
    return val == null;
}

console.log(verificare(null));      
console.log(verificare(undefined));

// 1.7
let obiect = { nume:"Denis", varsta: 20, student: true};
delete obiect.student;
console.log(obiect);

// 1.8
let array = [42, "text", true, {nume:"Denis"}, [1, 2, 3] ];
array.forEach(el => console.log(typeof el));


// 2.1
function suma(a,b) {
    return a + b;
}
console.log(suma(3, 7));

// 2.2
function ariaDreptunghiului(latime, inaltime = 1) {
    return latime * inaltime;
}
console.log(ariaDreptunghiului(20));

// 2.3
const patrat = function(numar) {
    return numar * numar;
}
console.log(patrat(5));

// 2.4
function upperCase(text) {
    let upperText = text.toUpperCase();
    return [upperText, upperText.length];
}
console.log(upperCase("Salut"));

// 2.5
function dublu(numar) {
    return numar * 2;
}
function numarPatrat(numar) {
    return numar * numar;
}
function calcule(numar) {
    return { dublu: dublu(numar), numarPatrat: numarPatrat(numar) };
}
console.log(calcule(1));

// 2.6
const sageata = (a, b) => a + b;
console.log(sageata(1, 2));

// 2.7
function altaFunctie(array, functie) {
    return array.map(functie);
}
console.log(altaFunctie([1, 2, 3], dublu));

// 3.1
let masina = { marca: "Toyota", model: "Avalon", an: 2013 };

// 3.2
console.log(masina.marca, masina["model"]);

// 3.3
masina.culoare = "rosu";
masina.an = 2014;

// 3.4
delete masina.model;

// 3.5
for (let cheie in masina) {
    console.log(`${cheie}: ${masina[cheie]}`);
}

// 3.6
masina.descriere = function() {
    return `${this.marca}, ${this.culoare}, ${this.an}`;
};
console.log(masina.descriere());

// 3.7
function afiseazaPersoana(persoana) {
    return `Nume: ${persoana.nume}, Varsta: ${persoana.varsta}`;
}
console.log(afiseazaPersoana({ nume: "Denis", varsta: 20 }));

// 3.8
console.log("culoare" in masina);

// 3.9
let casa = { adresa: { strada: "Mihai Eminescu", oras: "Chisinau" } };
console.log(casa.adresa.strada);

// 3.10
function creeazaStudent(nume, varsta, nota) {
    return { nume, varsta, nota };
}
console.log(creeazaStudent("Denis", 20, 9));

// 3.11
let masinaClone = Object.assign({}, masina);
let masinaClone2 = { ...masina };
console.log(masinaClone, masinaClone2);

// 3.12
let calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => a / b
};
console.log(calculator.adunare(3, 5));

// 3.13
let { marca, culoare } = masina;
console.log(marca, culoare);

// 4.1
let orase = ["Chisinau", "Bucuresti", "Iasi"];
console.log(orase[0], orase[orase.length - 1]);

// 4.2
orase.push("Cluj");
orase.unshift("Timisoara");
orase.pop();
console.log(orase);

// 4.3
let culori = ["rosu", "verde", "albastru"];
for (let i = 0; i < culori.length; i++) {
    console.log(culori[i]);
}

// 4.4
let animale = ["caine", "pisica", "cal"];
animale.forEach(animal => console.log(`Animal: ${animal}`));

// 4.5
function filtreazaNumere(array) {
    return array.filter(num => num > 10);
}
console.log(filtreazaNumere([5, 12, 18, 3]));

// 4.6
let numere = [42, 15, 8, 23];
numere.sort((a, b) => a - b);
console.log(numere);

// 4.7
let patrate = numere.map(num => num * num);
console.log(patrate);

// 4.8
let sumaTotal = numere.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal);

// 4.9
let animaleArray = ["caine", "pisica", "cal"];
console.log(animaleArray.includes("pisica"));
console.log(animaleArray.indexOf("cal"));

// 4.10
let array1 = ["mere", "pere"];
let array2 = ["banane", "struguri"];
let arrayCombinat = [...array1, ...array2];
console.log(arrayCombinat);

// 4.11
let matrice = [[1, 2], [3, 4]];
console.log(matrice[0][1]);

// 4.12
function eliminaDuplicate(array) {
    return [...new Set(array)];
}
console.log(eliminaDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 4.13
let subArray = numere.slice(1, 3);
numere.splice(2, 1);
console.log(subArray, numere);

// 5.1
document.getElementById("titlu").textContent = "Nou titlu";

// 5.2
document.querySelectorAll("li").forEach(el => el.style.color = "red");

// 5.3
let paragraf = document.createElement("p");
paragraf.textContent = "Text nou";
document.getElementById("container").appendChild(paragraf);

// 5.4
document.querySelector("img").src = "new-image.jpg";

// 5.5
document.getElementById("box").classList.add("noua-clasa");

// 5.6
let element = document.querySelector("p");
element.parentNode.removeChild(element);

// 5.7
document.getElementById("buton").addEventListener("click", function() {
    document.querySelector("h2").textContent = "Text modificat!";
});

// 5.8
document.getElementById("input").addEventListener("input", function() {
    document.getElementById("output").textContent = this.value;
});

// 5.9
let lista = document.querySelector("ul");
console.log(lista.firstElementChild.textContent, lista.lastElementChild.textContent);

// 5.10
document.getElementById("toggle-btn").addEventListener("click", function() {
    document.getElementById("element").classList.toggle("active");
});

// 5.11
let table = document.createElement("table");
for (let i = 0; i < 3; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 2; j++) {
        let cell = row.insertCell();
        cell.textContent = `Row ${i + 1} Col ${j + 1}`;
    }
}
document.body.appendChild(table);

// 5.12
document.getElementById("add-item").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "Element nou";
    document.querySelector("ul").appendChild(li);
});

// 7.1
setTimeout(() => console.log("Salut după 3 secunde!"), 3000);

// 7.2
let contor = 1;
let cronometru = setInterval(() => {
    console.log(contor);
    if (contor++ === 5) clearInterval(cronometru);
}, 1000);

// 7.3
function salutCallback(callback) {
    console.log("Salut!");
    callback();
}
salutCallback(() => console.log("Callback apelat!"));

// 7.4
function promisiune() {
    return new Promise(resolve => setTimeout(() => resolve("Rezolvat!"), 2000));
}
promisiune().then(console.log);

// 7.5
function testPromise(param) {
    return new Promise((resolve, reject) => {
        if (param) resolve("Succes!");
        else reject("Eroare!");
    });
}
testPromise(true).then(console.log).catch(console.error);

// 7.6
async function apelPromisiune() {
    let rezultat = await promisiune();
    console.log(rezultat);
}
apelPromisiune();

// 7.7
function p1() { return new Promise(res => setTimeout(() => res("P1"), 1000)); }
function p2() { return new Promise(res => setTimeout(() => res("P2"), 2000)); }
function p3() { return new Promise(res => setTimeout(() => res("P3"), 3000)); }

p1().then(console.log).then(p2).then(console.log).then(p3).then(console.log);

// 7.8
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));

// 7.9
Promise.all([p1(), p2(), p3()]).then(console.log);
Promise.allSettled([p1(), p2(), p3()]).then(console.log);