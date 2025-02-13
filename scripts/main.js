// Exercitiul 1.1
var a = 10
let b = "Text"
const c = true
//==========================================================
// Exercitiul 1.2
function tipdate(tip){
    return typeof tip;
}
//console.log(tipdate(a));


//==========================================================
// Exercitiul 1.3

let text = Number("111");
let numar = String(111); 
// console.log("Text: ", text)
// console.log("Numar: ", numar)

//==========================================================
//Exercitiul 1.4

let nume = "Dima";
let varsta = 20;
let afisare = `Ma numesc ${nume} si am ${20} ani`;
//console.log(afisare)

//==========================================================
//Exercitiul 1.5

let num1 = 10
let num2 = 20
let temporara = num1;
num1 = num2;
num2 = temporara;
//console.log(num2)

//==========================================================
//Exercitiul 1.6
function estenullsaunu(a){
    return a === null || a === undefined
}
//console.log(estenullsaunu(num1))

//==========================================================
//Exercitiul 1.7

let student = { nume: "Dima", varsta: 20, prezent: true };
student.universitatea = "USM";
delete student.varsta;
//console.log(student)

//==========================================================
//Exercitiul 1.8

let valori = [42, "text", true, null, { cheie: "valoare" }];

for (let i = 0; i < valori.length; i++) {
    //console.log(`Valoare: ${valori[i]}, Tip: ${typeof valori[i]}`);
}

//==========================================================
//==========================================================
//==========================================================




//EXERCITIUL 2

//=========================================================
//Exercitiul 2.1

function suma (a,b){
    return a+b
}
//console.log(suma(2,3))

//==========================================================
//Exercitiul 2.2

function ariadreptunghi(latime, lungime = 1){
    return latime * lungime
}
// console.log(ariadreptunghi(5,5))
// console.log(ariadreptunghi(5))

//==========================================================
//Exercitiul 2.3

let patrat = function(numar) {
    return numar * numar;
};

// console.log(patrat(5)); 
// console.log(patrat(3));

//==========================================================
//Exercitiul 2.4
function conversie(str) {
    let strMare = str.toUpperCase(); 
    return strMare.length;           
}

// console.log(conversie("testare"));
// console.log(conversie("Test")); 

//==========================================================
//Exercitiul 2.5

function calculeazaDublu(numar) {
    return numar * 2;
}

function calculeazaPatrat(numar) {
    return numar * numar;
}

function calculeazaRezultate(numar) {
    return {
        dublu: calculeazaDublu(numar),
        patrat: calculeazaPatrat(numar)
    };
}

//console.log(calculeazaRezultate(5)); 
//console.log(calculeazaRezultate(8)); 

//==========================================================
//Exercitiul 2.6

const sumacusageata = (a, b) => a + b;

//console.log(sumacusageata(1, 1));


//==========================================================
//Exercitiul 2.7

function aplicaFunctie(array, functie) {
    return array.map(functie);
}

const dubleaza = numar => numar * 2;

let numere = [1, 2, 3, 4, 5];
let rezultate = aplicaFunctie(numere, dubleaza);

//console.log(rezultate);

//==========================================================
//==========================================================


//Exercitiul 3.1
let car = {
    marca: "Hyundai",
    model: "Palisade",
    an: 2023
};

//==========================================================
//Exercitiul 3.2
//console.log(car)
//console.log(car.marca);
//console.log(car["model"]);


//==========================================================
//Exercitiul 3.3
car.culoare = "Negru";
car.an = 2018;
//console.log(car)

//==========================================================
//Exercitiul 3.4 
delete car.model;
//console.log(car)

//==========================================================
//Exercitiul 3.5
for (let cheie in car) {
    //console.log(`${cheie}: ${car[cheie]}`);
}

//==========================================================
//Exercitiul 3.6
car.descriere = function() {
    return `Marca masinii e ${this.marca}, anul ${this.an}, culoare ${this.culoare}.`;
};
//console.log(car.descriere());


//Exercitiul 3.7
function descrierePersoana(persoana) {
    return `Ma numesc ${persoana.nume} si am ${persoana.varsta} ani.`;
}
//console.log(descrierePersoana({ nume: "Dima", varsta: 20 }));

//==========================================================
//Exercitiul 3.8

//console.log("culoare" in masina);

//==========================================================
//Exercitiul 3.9
let casa = {
    adresa: {
        strada: "Test strada",
        oras: "Chisinau"
    }
};

//==========================================================
//Exercitiul 3.10
function creeazaStudent(nume, varsta, nota) {
    return { nume, varsta, nota };
}
//console.log(creeazaStudent("Dima", 20, 8.8));

//==========================================================
//Exercitiul 3.11
let carclone1 = Object.assign({}, car);
let carclone2 = { ...car };
// console.log(carclone1);
// console.log(carclone2);

//==========================================================
//Exercitiul 3.12
let calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => a / b
};
// console.log(calculator.adunare(5, 3));
// console.log(calculator.scadere(10, 4));
// console.log(calculator.inmultire(7, 6));
// console.log(calculator.impartire(8, 2));

//Exercitiul 3.13
let { marca, an } = car;
//console.log(marca, an);

//==========================================================
//Exercitiul 4.1
let orase = ["Chisinau", "Balti", "Orhei"];
//console.log(orase[0]);
//console.log(orase[orase.length - 1]);

//==========================================================
//Exercitiul 4.2
orase.unshift("Rezina");
orase.push("Leova");
orase.pop();

//==========================================================
//Exercitiul 4.3
let culori = ["roșu", "verde", "albastru"];
for (let culoare of culori) {
    //console.log(culoare);
}

//==========================================================
//Exercitiul 4.4
let animale = ["câine", "pisică", "cal"];
//animale.forEach(animal => console.log(`Animal: ${animal}`));

//==========================================================
//Exercitiul 4.5
function filtreazaNumere(arr) {
    return arr.filter(num => num > 10);
}
//console.log(filtreazaNumere([5, 12, 18, 7, 25]));

//==========================================================
//Exercitiul 4.6 
let numere2 = [42, 7, 19, 3];
numere2.sort((a, b) => a - b);
//console.log(numere2);

//==========================================================
//Exercitiul 4.7
let patrate = numere2.map(num => num * num);
//console.log(patrate);

//==========================================================
//Exercitiul 4.8
let suma2 = numere2.reduce((acc, num) => acc + num, 0);
//console.log(suma);

//==========================================================
//Exercitiul 4.9
//console.log(numere2.includes(19));
//console.log(numere2.indexOf(7));

//==========================================================
//Exercitiul 4.10
let cuvinte1 = ["bun", "frumos"];
let cuvinte2 = ["inteligent", "harnic"];
let combinat = [...cuvinte1, ...cuvinte2];
//console.log(combinat);

//==========================================================
//Exercitiul 4.11
let matrice = [
    [1, 2],
    [3, 4]
];
//console.log(matrice[0][1]);

//==========================================================
//Exercitiul 4.12
function eliminaDuplicate(arr) {
    return [...new Set(arr)];
}
//console.log(eliminaDuplicate([1, 2, 2, 3, 4, 4]));

//==========================================================
//Exercitiul 4.13
let subArray = numere.slice(1, 3);
//console.log(subArray);
numere.splice(2, 1);
//console.log(numere);



//==========================================================
//==========================================================
//Exercitiul 5.1
document.getElementById("myTitle").innerText = "Titlu schimbat";

//==========================================================
//Exercitiul 5.2
document.querySelectorAll("li").forEach(li => li.style.color = "red");

//==========================================================
//Exercitiul 5.3
let p = document.createElement("p");
p.innerText = "Acesta este un paragraf nou.";
document.getElementById("container").appendChild(p);

//==========================================================
//Exercitiul 5.4
document.getElementById("myImage").src = "../image2.jpg";

//==========================================================
//Exercitiul 5.5
document.getElementById("box").classList.add("new-class");

//==========================================================
//Exercitiul 5.6
let paragraph = document.querySelector("p");
if (paragraph) paragraph.remove();

//==========================================================
//Exercitiul 5.7
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myHeading").innerText = "Text schimbat!";
});

//==========================================================
//Exercitiul 5.8
document.getElementById("myInput").addEventListener("input", function() {
    document.getElementById("output").innerText = this.value;
});

//==========================================================
//Exercitiul 5.9
let ul = document.querySelector("ul");
if (ul) {
    let first = ul.firstElementChild?.innerText;
    let last = ul.lastElementChild?.innerText;
    console.log("Primul element:", first);
    console.log("Ultimul element:", last);
}

//==========================================================
//Exercitiul 5.10
document.getElementById("toggleButton").addEventListener("click", function() {
    document.getElementById("toggleElement").classList.toggle("active");
});

//==========================================================
//Exercitiul 5.11
let table = document.createElement("table");
for (let i = 0; i < 3; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 2; j++) {
        let cell = row.insertCell();
        cell.innerText = `Row ${i+1}, Col ${j+1}`;
    }
}
document.body.appendChild(table);

//==========================================================
//Exercitiul 5.12
let ulList = document.createElement("ul");
document.body.appendChild(ulList);
document.getElementById("addItemButton").addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = "Element nou";
    ulList.appendChild(li);
});