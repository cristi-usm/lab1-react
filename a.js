
//1.1
var number = 1;
let text = "Hello!";
const bool = true;
//1.2
let t1 = 2;
function myFunction(t1){
    return typeof(t1);
 }
console.log(myFunction(t1));
//1.3
let strToNumber = Number("777");
let numToString = String("36");
//1.4
let nume = "Andrian";
let varsta = 20;
console.log(`Ma numesc ${nume} si am ${varsta} de ani`);
//1.5
let a = 3;
let b = 5;
let c = a;
a = b;
b = c;
console.log(c);
//1.6
function myFunction(valoare){
    return valoare === null || valoare === undefined;
}
//1.7
let masina = { marca: "Toyota", an: 2020, electrica: false };
masina.culoare = "rosie";
delete masina.electrica;
//1.8
let array = [3, "Salut Cristi", true, {key: "Noroc"}, [1, 2, 3] ];
array.forEach( valoare => console.log(typeof valoare))
//2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function myFunction(t1, t2) {
    return t1 + t2;
  }
// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată,
//  să aibă valoarea implicită de **1**.
function myFunction(Latimea, Inaltimea = 1) {
    return Latimea * Inaltimea;
}
//2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
let x = function (a){
    return a*a;
}
//2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function transform(str){
    let sir = str.UpperCase();
    return sir.lenght;
}
//2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru
//  a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
funtion myFunction (nr){
    funtion dublu(a){
        return a * 2;
    }
    funtion patrat(a){
        return a * a;
    }
    return {1 : dublu(nr), 2: patrat(nr)};
}
//2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
let sum = (a,b) =>{
    return(a+b)
}
//2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array
function myFunction(arr,func){
    return arr.map(func);
}
//3.1 Declarați un obiect **masina** cu următoarele proprietăți:
//  **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
let masina = {
    marca: "toyota",
    model: "prius",
     an: 2027,
     descriere: function{
     return `${this.marca}, ${this.an}, ${this.culoare},`;
    },
    };
//3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct,
//  cât și cea cu paranteze pătrate.
console.log(masina.marca);
console.log(masina["model"]);
//3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
masina.culoare = "alba";
masina.an = 2000;
//3.4 Ștergeți proprietatea model din obiect
delete masina.model;
//3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile
//  și valorile acestora.
for (let key in masina){
    console.log(`${key}: ${masina[key]}`);
}
// 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate
//  informațiile despre mașină.
masina.descriere = function(){
    return `${this.marca}, ${this.an}, ${this.culoare},`
}
// 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și
//  **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
function pers(persoana)(
    return ` Nume: ${persoana.nume}, varsta: ${persoana.varsta}`;
)
// 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
console.log("culaore" in masina)

// 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum
//  **strada** și **oras**.
let obiect = {
    adresa: {
        strada: "usm",
        oras: "Moldova"
    }
}
//3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student**
//  cu proprietățile **nume**, **varsta** și **nota**.
function returnStudent(nume, varsta, nota){
    return{
        nume, varsta, nota
    }
}
//3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
let masina1 = Object.assign({}, masina);
let masina2 = {...masina};
//3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
let calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => a / b
};
//3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
let obiect = {nume: "Ion", varsta: 15};
let {nume: nume, varsta: varsta} = obiect;
console.log(nume, varsta);
//4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
let arr = ["Chisinau", "Balti", "Orhei"];
console.log(arr[0], arr[arr.length - 1]);
//4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
arr.push("Cahul");
arr.unshift("Craiova");
arr.pop();
//4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
let arr = ["alb", "negru", "sur"];
for (let culoare of arr) {
}
//4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și 
// afișați fiecare element cu un mesaj personalizat.
let arr = ["pisică", "câine", "magar"];
arr.forEach(animal => console.log(`Animal: ${animal}`));
//4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
function filtr(arr) {
    return arr.filter(nr => nr > 10);
}
//4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
let numere = [3123, 12341234, 12421, 4124, 124, 12];
numere.sort((a, b) => a - b);
//4.7 Scrieți un program care primește un array de numere și returnează un nou
//  array cu pătratele fiecărui număr, utilizând funcția *map*.
let arr = [23, 321, 12, 123];
let patrate = arr.map(nr => nr * nr);
//4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
let suma = arr.reduce((acc, nr) => acc + nr, 0);
//4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
console.log(arr.includes(12));
console.log(arr1.indexOf("Salut"));
//4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
 let arr1 = [1, 2, 3];
 let arr2 = [4, 5, 6];
 let arr3 = arr1.concat(arr2);
//4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul 
// de pe **linia 1**, **coloana 2**.
let arr = [
    ['a', 'b'],
    ['c', 'd']
];
let element = arr[0][1];
//4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
function elim(arr) {
    return [...new Set(arr)];
}
// 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.
let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(1, 3); 
array.splice(2, 1);
//5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById*
//  și schimbați textul acestuia.
let text = document.getElementById("Salut");
text.innerText = "Noroc";
//5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll*
//  și schimbați culoarea textului.
let elementeLi = document.querySelectorAll('lo');
elementeLi.forEach((li) => { li.style.color = 'blue';
});
//5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la
//  sfârșitul unui element **`<div>`** cu ID-ul **container**.
let p = document.createElement('p');
p.innerText = "Text";
let container = document.getElementById('container');
container.appendChild(p);
//5.4 Selectați o imagine și schimbați valoarea atributului *src*.
document.querySelector("img").src = "newImage.jpg";
//5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
let box = document.getElementById('box');
box.classList.add('clasa noua');
//5.6 Eliminați un element **`<p>`** dintr-un document.
let element = document.querySelector('p');
element.remove();
//5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
let button = document.getElementById('Buton');
button.addEventListener('clic', ()=> {
    let h2 = document.querySelector('h2');
    h2.innerText = "Schimbat";
})
//5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
<label for="introducere">Scrie ceva:</label>
    <input type="text" id="introducere" placeholder="Text">
    <p>Ai scris: <span id="afisare"></span></p>

document.getElementById("introducere").addEventListener("input", function() {
    document.getElementById("afisare").textContent = this.value;
//5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
<ul id="lista">
        <li>Primul element</li>
        <li>Ultimul element</li>
    </ul>
    <p><strong>Primul element:</strong> <span id="primul"></span></p>
    <p><strong>Ultimul element:</strong> <span id="ultimul"></span></p>

const lista = document.getElementById("lista");
const primulElement = lista.firstElementChild.textContent;
const ultimulElement = lista.lastElementChild.textContent;
document.getElementById("primul").textContent = primulElement;
document.getElementById("ultimul").textContent = ultimulElement;
//5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.


//5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.


//5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.
<button onclick="adaugaElement()">Adaugă</button>
    <ul id="lista"></ul>
    let contor = 1; 
    function adaugaElement() {
        let lista = document.getElementById("lista");
        let elementNou = document.createElement("li");
        elementNou.textContent = "Element " + contor++;
        lista.appendChild(elementNou);
//7.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(() => {console.log("Mesaj dupa 3 sec");}, 3000);
//7.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
let nr = 1;
let cronometru = setInterval(() => {
    console.log(nr);
    nr++;
    if (nr > 5) clearInterval(cronometru);
}, 1000);
//7.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru)
//  și îl apelează după ce afișează un mesaj.
function (callback) {
    console.log("Salut!");
    callback();
}
salut(() => {
    console.log("noroc");
});
//7.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.
function promisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("promisiunea");
        }, 2000);
    });
}
//7.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată 
// în funcție de valoarea unui parametru.
function verificaValoare(valoare) {
    return new Promise((rezolvata, respinsa) => {
        if (valoare > 0) {
            rezolvata("Valoarea este pozitivă.");
        } else {
            respinsa("Valoarea nu este pozitivă.");
        }
    });
}
//7.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
async function asincron(){
    let rezultat = await promisiune();
    console.log(rezultat);
}

//7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
function primaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Prima promisiune rezolvată!");
        }, 1000);
    });
}

function aDouaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("A doua promisiune rezolvată!");
        }, 1500);
    });
}

function aTreiaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("A treia promisiune rezolvată!");
        }, 2000);
    });
}
primaPromisiune()
    .then(rezultat1 => {
        console.log(rezultat1);
        return aDouaPromisiune();
    })
    .then(rezultat2 => {
        console.log(rezultat2);
        return aTreiaPromisiune();
    })
    .then(rezultat3 => {
        console.log(rezultat3);
    })
    .catch(eroare => {
        console.error("Eroare", eroare);
    });
//7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** 
// https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
function meniu() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) 
        .then(data => {
            const lista = document.getElementById("meniu");

//7.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
function primaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Prima promisiune rezolvată");
        }, 1000);
    });
}

function aDouaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("A doua promisiune rezolvată");
        }, 1500);
    });
}

function aTreiaPromisiune() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("A treia promisiune rezolvată");
        }, 2000);
    });
}
Promise.all([primaPromisiune(), aDouaPromisiune(), aTreiaPromisiune()])
    .then(rezultate => console.log(" Promise.all: ", rezultate))
    .catch(eroare => console.error(" Promise.all a eșuat:", eroare));

Promise.allSettled([primaPromisiune(), aDouaPromisiune(), aTreiaPromisiune()])
    .then(rezultate => console.log(" Promise.allSettled: ", rezultate));

//8.1 În fișierul **mathUtils.js** exportați două funcții simple pentru 
// operații matematice: **adunare** și **scădere**. 
export function adunare(a, b) {
    return a + b;
}
export function scadere(a, b) {
    return a - b;
}
//8.2 În fișierul **main.js** importați funcțiile și folosiți-le pentru
//  a calcula suma și diferența a două numere. 
import { adunare, scadere } from './mathUtils.js';

console.log(adunare(5, 3));
console.log(scadere(10, 4));
//8.3 În fișierul **salutari.js** exportați implicit o funcție care afișează un mesaj de salut.
exportfunction salutare() {
    console.log("Salut);
}

//8.4 În fișierul **main.js** importați funcția cu un nume ales de utilizator și folosiți-o pentru
//a saluta un utilizator.
import norocCristi from './salutari.js';
norocCristi();
// 8.5 În fișierul  **dateUtilizator.js** exportați mai multe valori.
let nume = "Andrian";
let varsta = 20;
let email = "abercu2004@gmail.com";
export { nume, varsta, email };

// 8.6 În fișierul **main.js** importați întregul modul și accesați valorile exportate.

import * as date from './dateUtilizator.js';

console.log("Nume:", date.);
console.log("Varsta:", date.varsta);
console.log("Email:", date.email);










