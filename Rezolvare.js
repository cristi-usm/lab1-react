var x = 10;
let text = "Hello, World!";
const truthiness = true;
function varType(variabila) {
  return typeof variabila;
}

let s = "123";
let num = Number(s);
let n = 456;
let str = String(n);

let namePers = "Alex";
let age = 21;
let mesage = `My name is ${namePers} and I am ${age} years old.`;

let a = 5,
  b = 10;
let temp = a;
a = b;
b = temp;

function verificaNull(x) {
  return x === null || x === undefined;
}

let person = {
  name: "John",
  age: 30,
  student: "true",
};

person.city = "New York";
delete person.student;

let arr = [10, "text", true, null, { a: 1 }];
arr.forEach((element) => {
  console.log(element);
});

function suma(a, b) {
  return a + b;
}

function aria(lungime, inaltime = 1) {
  return lungime * inaltime;
}

const patrat = function (n) {
  return n * n;
};

function converteste(text) {
  let mare = text.toUpperCase();
  return mare.length;
}

function dublu(n) {
  return n * 2;
}
function patrat2(n) {
  return n * n;
}
function Numar(n) {
  return {
    dublu: dublu(n),
    patrat: patrat2(n),
  };
}

const sumaArrow = (a, b) => a + b;

function aplicaFunctie(arr, f) {
  return arr.map(f);
}

let masina = {
  marca: "Toyota",
  model: "Corolla",
  an: 2020,
};

console.log(masina.marca); // Output: "Toyota"
console.log(masina["model"]); // Output: "Corolla"

masina.culoare = "negru";
masina.an = 2022;

delete masina.model;

for (let key in masina) {
  console.log(key + ": " + masina[key]);
}

masina.descriere = function () {
  return ` ${this.marca} ${this.model} (${this.an}) - ${this.culoare}`;
};

function mesajPers(p) {
  return `Salut, numele meu este ${p.name} si am ${p.age} ani.`;
}

console.log("culore" in masina); // Output: true

let casa = {
  adresa: {
    strada: "Strada Florilor",
    oras: "Chisinau",
  },
};

function creeateStudent(name, age, nota) {
  return { name, age, nota };
}

let clon1 = Object.assign({}, masina);
let clon2 = { ...masina };

let calculator = {
  adunare: (a, b) => a + b,
  scadere: (a, b) => a - b,
  inmultire: (a, b) => a * b,
  impartire: (a, b) => a / b,
};

let { marca, an } = masina;

let orase = ["Chisinau", "Bucuresti", "Iasi"];
console.log(orase[0]); // Output: "Chisinau"
console.log(orase[orase.length - 1]); // Output: "Iasi"

orase.push("Cluj-Napoca");
orase.unshift("Timisoara");
orase.pop();

let culori = ["rosu", "verde", "albastru"];
for (let i = 0; i < culori.length; i++) {
  console.log(culori[i]);
}

let animale = ["caine", "pisica", "iepure"];
animale.forEach((animal) => console.log(`Animal: ${animal}`));

function peste10(arr) {
  return arr.filter((num) => num > 10);
}

console.log(peste10([5, 12, 8, 15, 3])); // Output: [12, 15]

let nums = [5, 7, 2, 9];
nums.sort((a, b) => a - b);
console.log(nums); // Output: [2, 5, 7, 9]

let patratArr = nums.map((num) => num * num);
console.log(patratArr); // Output: [4, 25, 49, 81]

let sumaTotala = nums.reduce((acc, num) => acc + num, 0);
console.log(sumaTotala); // Output: 23

console.log(nums.includes(7)); // Output: true
console.log(nums.indexOf(2)); // Output: 0

let a1 = ["ana", "are"];
let a2 = ["mere"];
let comb = [...a1, ...a2];
console.log(comb); // Output: ["ana", "are", "mere"]

let matrice = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matrice[0][1]); // Output: 3

function faraDuplicate(arr) {
  return [...new Set(arr)];
}

let ex = [1, 2, 3, 4, 5];
let sub = ex.slice(2, 5);
ex.splice(2, 1);

<h1 id="titlu">Titlu</h1>

let titlu = document.getElementById("titlu");
titlu.textContent = "Noul Titlu";
titlu.style.color = "red";

let elemente = document.querySelectorAll("li");
elemente.forEach(li => li.style.color = "blue");

let p = document.querySelector("p");
p.textContent = "Acesta este un paragraf modificat.";
document.getElementById("container").appendChild(p);


<img id="poza" src="img1.jpg"></img>
document.getElementById("poza").src = "img2.jpg";

document.getElementById("box").classList.add("noua-clasa");

let paragraf = document.querySelector("p");
paragraf.remove();

//<button id="btn">Click</button> 
<h2 id="subtitle">Text vechi</h2>
document.getElementById("btn").addEventListener("click", ()=> {
    document.getElementById("subtitle").textContent = "Text nou";
});

let input = document.getElementById("inputText");
let pAfis = document.getElementById("afisare");

input.addEventListener("input", ()=>{
    pAfis.textContent = input.value;
});

let ul = document.querySelector("ul");
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

//<button id="toggleBtn">Toggle</button>
<div id="card"></div>

document.getElementById("toggleBtn").onclick = ()=>{
    document.getElementById("card").classList.toggle("active");
}

let table = document.createElement("table");

for(let i=0;i<3;i++){
    let tr = document.createElement("tr");
    for(let j=0;j<2;j++){
        let td = document.createElement("td");
        td.textContent = `R${i+1}C${j+1}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);


//<ul id="lista"></ul>
<button id="addItem">Adauga</button>
document.getElementById("addItem").onclick = ()=>{
    let li = document.createElement("li");
    li.textContent = "Element nou";
    document.getElementById("lista").appendChild(li);
}

setTimeout(()=> console.log("Salut dupa 3 sec"),3000);

let i=1;
let timer = setInterval(()=>{
    console.log(i);
    if(i===5) clearInterval(timer);
    i++;
},1000);


function salut(callback){
    console.log("Salut!");
    callback();
}

salut(()=>console.log("Callback executat"));

function asteapta(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Gata!"),2000);
    });
}

function verifica(val){
    return new Promise((resolve,reject)=>{
        if(val) resolve("Succes");
        else reject("Eroare");
    });
}


async function test(){
    let rezultat = await asteapta();
    console.log(rezultat);
}
test();


function p1(){ return Promise.resolve(1); }
function p2(n){ return Promise.resolve(n+1); }
function p3(n){ return Promise.resolve(n+1); }

p1().then(p2).then(p3).then(console.log);


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res=>res.json())
.then(data=>console.log(data));


let pr1 = Promise.resolve(10);
let pr2 = Promise.resolve(20);
let pr3 = Promise.reject("eroare");

Promise.all([pr1,pr2])
.then(console.log);

Promise.allSettled([pr1,pr2,pr3])
.then(console.log);



export function adunare(a,b){ return a+b; }
export function scadere(a,b){ return a-b; }


import {adunare, scadere} from "./mathUtils.js";

console.log(adunare(5,3));
console.log(scadere(5,3));


export default function salut(nume){
    console.log(`Salut ${nume}!`);
}


import salutUser from "./salutari.js";
salutUser("Alex");


export const nume = "Alex";
export const varsta = 20;
export const oras = "Chisinau";


import * as user from "./dateUtilizator.js";

console.log(user.nume);
console.log(user.varsta);
console.log(user.oras);



console.log(num); // Output: 123
console.log(str); // Output: "456"
console.log(mesage); // Output: "My name is Alex and I am 21 years old."

console.log(varType(x)); // Output: "number"
console.log(varType(text)); // Output: "string"
console.log(varType(truthiness)); // Output: "boolean"
