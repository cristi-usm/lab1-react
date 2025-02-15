// ex 1
var numar = 5;
let text = "Salut, sunt student!";
const boolean = true;
function functia(a) {
    return typeof(a);
}


let conv = 3;
let myvar = String(conv);
//console.log(typeof(myvar));

let variable = "3";
let change = Number(variable);
//console.log(typeof(change));


let nume = "Mihai";
let varsta = 5;
//console.log(`${nume} are ${varsta} ani.`);



let a = 8;
let b = 4;
let c = a;
a = b;
b = c;
//console.log(b);
//console.log(a);



let textul = "Acest text.";
function verifica(textul) {
    if (textul === null || textul === undefined) {
        console.log("Variabila nula sau nedefinita.");
    } 
    else {
        console.log("Variabila valida.");
    }
}
verifica(textul);


let pacient = {
    nume: "Gheorghe",
    prenume: "Stefanita",
    varsta: 25,
    profesia: true,

};
pacient.sector = "Riscani";
delete pacient.profesia;
//console.log(pacient);


const myarray = [2, "calcul", true, null, 23.7];
for (const i in myarray) {
    console.log(typeof(myarray[i]));
}

//ex 2
function suma(a, b) {
    return a + b;
}
suma(3, 6);


function aria(m, n) {
    if (n === undefined) {
        n = 1;
    } 
    return m * n;
}
aria(3, 6);


const patrat = function(l){
    return l * l;
}
patrat(3);


function number_char(string) {
    string.toUpperCase();
    return string.length;
}
number_char("hello");



function double(nr) {
    return nr * 2;
}
function square(nr) {
    return nr * nr;
}
function main(nr) {
    const object = new Object();
    object.dublu = double(nr);
    object.patrat = square(nr);
    return object;
}
double(2);
square(6);
main(3);



const suma = (a, b) => a + b;




arr = [1, 2, 3, 4];
function sum() {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function myFun() {
    console.log(sum(arr));
}
myFun();


//ex 3
const masina = {
    marca: "Porsche",
    model: "Cayenne",
    an: 2023,
    descriere: function() {
        return "Marca: " + this.marca + ", modelul: " + this.model + ", anul: " + this.an;
    }
};

console.log(masina.marca);
console.log(masina.model);
console.log(masina["marca"]);
console.log(masina["model"]);
masina.culoare = 'negru';
masina.an = 2022;
delete masina.model;
console.log(masina);
for (key in masina) {
    console.log(key,":", masina[key]);
}


const persoana = {
    nume: "Alexei",
    varsta: 6
    
};
const afisare = ({nume, varsta}) => {
    console.log(`${nume} are ${varsta} ani.`);
}
//afisare(persoana);
console.log("culoare" in masina);


const casa = {
    adresa: {
        strada: "Alexei Mateevici 20",
        oras: "Soroca"
    }
};

function student_f(nume, varsta, nota) {
    var student = {};
    student.nume = nume;
    student.varsta = varsta;
    student.nota = nota;
    return student;
}

let clonare = Object.assign(masina, persoana, casa); //copiaza toate prop. obiectelor si le adauga in masina
//console.log(clonare);


let exemplu = {
    casa: "Townhouse",
    domeniu: "IT",
    ...masina
};
console.log(exemplu);



const calculator = {
    adunare: function(a, b) {
        return a + b;
    },
    scadere: function(a, b) {
        return a - b;
    },
    inmultire: function(a, b) {
        return a * b;
    },
    impartire: function(a, b) {
        return a / b;
    }
};

const adaugare =  {tara: "Germania", ...masina, alimentare: "benzina"};
console.log(adaugare);
//destructurarea anumitor propr.
let {marca, model} = masina;
//console.log(marca); Porsche
//console.log(model); Cayenne


//ex 4
orase = ["Chisinau", "Bucuresti", "Atena"];
console.log(orase[0]);
console.log(orase[2]);

orase.push("Sofia"); // la sfarsit adaug
orase.unshift("Budapesta"); // la inceput adaug
delete orase[4];

culori = ["rosu", "albastru", "verde", "galben"];
for ( i=0; i<culori.length; i++) {
    console.log(culori[i]);
}

/////4.4
const animale = ["broasca", "lupul", "vulpea", "ursul"];
animale.forEach(function_s);
function function_s(animal, index){
    const propozitii = [
        " sare in lac",
        " urla la luna",
        " pandeste gainile",
        " hiberneaza in barlog"];
        console.log(animal + propozitii[index]);
    }
//4.5
const myarrays = [1, 4, 7, 12, 40, 28, 9, 37];
const result = myarrays.filter((element) => element > 10);
console.log(result);

//sau
const array = [1, 4, 7, 12, 40, 28, 9, 37];
let empty = [];
function nr_mari(array) {
    for(const element of array){
        if(element > 10){
           
            empty.push(element);
        }  }
   return empty;
}
console.log(nr_mari(array));


//sortare in ordine crescatoare
const arr = [1, 4, 7, 12, 40, 28, 9, 37];
function to_sort(a, b){
    return a - b;
}
arr.sort(to_sort);
console.log(arr);

//map
const map = arr.map((i) => i ** 2);
//reduce aplica o functie asupra unui array pentru a-l reduce la o singura valoare (suma elementelor)
const suma = arr.reduce((accumulator, value) => accumulator + value, 0);

console.log(arr.includes(12)); //true
console.log(arr.indexOf(7)); //2

const elements = ["water", "air", "fire"];
const element = ["joke", "lorry", "lord"];
const your_result = [...elements, ...element];
const key = elements.concat(element);
console.log(your_result);
console.log(key);


const matrice = [[1, 2],
                [3, 4]];
console.log(matrice[0][1]);

//4.12 eliminare duplicate din array
//indexOf() returneaza prima aparitie a valorii
const new_array = [2, 5, 7, 4, 2, 4, 0, 3, 7, 7];
function eliminare(array) {
    return array.filter((value, index) => array.indexOf(value) === index); //compara pozitia primei aparitii (indexOf) cu poz curenta, daca e True ramane
}
console.log(eliminare(new_array));

//4.13
const new_arr = [2, 5, 7, 4, 2, 4, 0, 3, 7, 7];
console.log(new_arr.slice(3)); //subarray fara primele 3 elemente
console.log(new_arr.splice(2, 1)); //elimina elementul cu indexul 2

//5.1
const elem = document.getElementById("h1");
elem.innerHTML = "Another text";

const list = document.getElementById("mylist"); // id listei
const items = list.querySelectorAll(".li"); // clasa elementelor
items.forEach((item) => {
  item.style.color = "yellow";
});

//5.3
const newParagraph = document.createElement("p");
newParagraph.innerText = "Text adaugat";
newParagraph.innerHTML += "Text adaugat";
document.getElementById("container").appendChild(newParagraph);

//5.4
let imagine = document.getElementById("myimg"); //id imagine
document.getElementById("buton").addEventListener("click", ()=> { //id buton
imagine.src = "myimage.jpg";
});

//5.5 se adauga o clasa nou elementului cu id dat
let elementul = document.getElementById("box");
elementul.classList.add("newClass");


const paragrafSters = document.getElementById("p");
paragrafSters.remove();


// <h2 id="text" onclick="clickF()">SALUT</h2>
function clickF() {
    document.getElementById("text").innerText = "HELLO";
  }

//5.8
//<input id="mytext" type="text"/>
//<p>Textul introdus: <span id="result"></span></p>
let myInput = document.getElementById("mytext");
let myOutput = document.getElementById("result");
//actualizarea in timp real
myInput.addEventListener("input", () => { // evenimentul input se declanseaza cand utilizatorul introduce, modifica text in camp
    myOutput.textContent = myInput.value; //in myOutput se actualizeaza textul 
}); 
const myPara = document.createElement("p");
myPara.textContent = "Paragraful meu";
document.getElementById("result").appendChild(myPara);

//5.9 p/u <ul> cu id = "id"
const first = document.getElementById("id").firstChild.innerHTML; //primul element
const last = document.getElementById("id").lastChild.innerHTML; //ultimul element
console.log(first);
console.log(last);

//5.10
//<style>
//  .active {
//   color: blue; /* Culoarea când este activ */
//  }
//</style>

//<div id="button"> 
//  <p class="btclass">Acest paragraf</p>
//  <button onclick="apasare()">Apasă</button>
//</div>

//<script>
  function apasare() {
    let elements = document.querySelectorAll(".btclass"); // Selectează toate elementele cu clasa "btclass"
    
    elements.forEach(el => {
      el.classList.toggle("active"); // Adaugă/elimină clasa "active"
    });
  }
  //classList acceseaza lista de clase CSS pentru elementul el -> paragraful care isi schimba culoarea
  //toggle() ->  Dacă elementul nu are clasa "active", o adaugă; dacă o are, o elimină.
//</script>

//5.11
const tabel = document.querySelector("div.tabelulmeu"); //div cu id tabelulmeu
let titluri = ["Disciplina", "Rechizite"];
let randuri = [
  ["Pictura", "Acuarela"],
  ["Chimia", "Eprubeta"],
  ["Biologia", "Microscopul"]
];

const myButon = document.getElementById('buton');

const myTable = () => {
  let mytable = document.createElement('table'); // Crearea tabelului
  mytable.className = 'mytable';

  let header = document.createElement('thead'); // Crearea header-ului
  let headerRow = document.createElement('tr');

  titluri.forEach(titlu => {
    let th = document.createElement('th');
    th.textContent = titlu;
    headerRow.appendChild(th);
  });

  header.appendChild(headerRow);
  mytable.appendChild(header);

  let tbody = document.createElement('tbody'); // Crearea corpului tabelului

  randuri.forEach(rand => {
    let row = document.createElement('tr');
    rand.forEach(coloana => {
      let td = document.createElement('td');
      td.textContent = coloana;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });

  mytable.appendChild(tbody);
  tabel.appendChild(mytable);
}

myButon.addEventListener('click', myTable);


//5.12
const myInputD = getElementById("clickOn");
const add = document.getElementById("saved");
let elementeSalvate = []
myInputD.onclick = function adaugare() {
  elementeSalvate.push(myInputD.value);
  if(myInputD.value.length > 0){
    add.insertAdjacentHTML('afterend', `<li id="theList">${myInputD.value}</li>
    <button>Adauga</button>`); //afterend insereaza text imediat dupa elementul add elementele HTML din backtick
    myInputD.value = ''; //input golit dupa adaugare
  }
  toSave();
};

function toSave() {
  localStorage.setItem('saved', JSON.stringify(elementeSalvate)); //saved - datele salvate vor putea fi accesate mai tarziu
} //stringify converteste in string, siruri de caractere

function vizualizare() {
  const dateSalvate = JSON.parse(localStorage.getItem('saved'));
  if(elementeSalvate) {
    for(const element of elementeSalvate) {
      add.insertAdjacentHTML('afterend', `<li id="theList">${element}</li>
    <button>Adauga</button>`);
    }
    salvate = dateSalvate;
  }
}
window.onload = function() { vizualizare(); }; //afisarea notelor salvate
//js lab2


//7.1
function afisareMesaj(callback) {
    setTimeout (() => { //setTimeout apeleaza functia dupa cateva milisecunde fara a bloca functia
        callback("Afisarea acestui mesaj dupa 3 secunde.");
    }, 3000);
}
afisareMesaj(afisare => {
    console.log(afisare);
} );
//7.3
//Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function salut(callback) {
    console.log("Salut sunt student");
    functiaMea();
    callback("Sfarsit");
}
function functiaMea() {
    let a = 3;
    let b = 4;
    console.log(a + b);
    
}
salut(functiaMea);


//7.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
function cronometru(callback) {
    setTimeout(() => {
        for(let i=1; i<6; i++){
            callback(i);
        }
    }, 1000);
}
cronometru(afisare => {
    console.log(afisare);
});

// 7.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.

function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiune rezolvata");
            let a = 4;
            let b = 9;
            console.log(b - a);
        }, 2000);
    })
}

promisiune()
.then(rezultat => console.log(rezultat));

//7.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function newPromise(parametru) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(parametru === 4) {
                console.log("Salut");
                resolve("Ura!");
            }
            else {  reject("Trist");}
        }, 2000);
    })
}
newPromise(4);

//7.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
async function fAsincrona(){
    console.log("Functia mea asincrona");
    let asincron = await promisiune();
    console.log(asincron);
}
fAsincrona();

//7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
function promiseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nume = "Swift";
            let prenume = "Johnatan";

            if (nume !== "Swift") {
                reject("Bye");
            } else {
                resolve(`His name is ${nume} ${prenume}.`);
            }
        }, 2000);
    });
}

function promiseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let y = 20;
            let z = 30;

            if (z > y) { 
                resolve("Bonjour");
            } else {
                reject("Au revoir");
            }
        }, 4000);
    });
}

function promiseThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const array = [1, 2, 3, 4];
            const rezultat = array.map((element) => element * 10); 
            resolve(rezultat);
        }, 6000);
    });
}


promiseOne()
    .then(result => console.log(result))
    .catch(error => console.error("Eroare promiseOne:", error));

promiseTwo()
    .then(result => console.log(result))
    .catch(error => console.error("Eroare promiseTwo:", error));

promiseThree()
    .then(result => console.log("Rezultate promiseThree:", result))
    .catch(error => console.error("Eroare promiseThree:", error));


//7.8 Utilizați fetch pentru a prelua date de la o API publică 
// (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch('https://jsonplaceholder.typicode.com/guide/')
    .then(response => response.json())
    .then(items => console.log(items));

//7.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
const promisiuni = [
    new Promise((resolve) => {
        setTimeout(() => {console.log("First promise"); resolve("Prima este rezolvata");}, 2000);}),
    new Promise((resolve) => {
        setTimeout(() => {console.log("Second promise"); resolve("A doua este rezolvata");}, 3000);}),
    new Promise((resolve) => {
        setTimeout(() => {console.log("Third promise"); resolve("A treia este rezolvata");}, 2000); })
    ];
Promise.allSettled(promisiuni).then(results => {console.log(results);});

//8.2
import {adunare, scadere} from './mathUtil.js'

console.log(adunare(3, 4));
console.log(scadere(10, 5));

//8.4
import './salutari.js'
const numele = prompt("Introdu numele tau:");
console.log(salut(numele));

//8.6
import './dateUtilizator.js'
console.log(`Salut, sunt ${myName}. Am ${myAge} de ani și sunt ${functie}.`);

