// 1.1 Declararea variabilelor
var numar = 25;
let nume = "Vlada";
const esteStudent = true;

console.log(numar);
console.log(nume);
console.log(esteStudent);

// 1.2 Verificarea tipului de date

function verificaTip(valoare) {
    return typeof valoare;
}

console.log(verificaTip(123));
console.log(verificaTip("Buna"));
console.log(verificaTip(true));
console.log(verificaTip(10.5));

// 1.3 Conversia tipurilor de date

let textNumar = "123";
let numarConvertit = Number(textNumar);

let valoareNumar = 456;
let textConvertit = String(valoareNumar);

console.log(numarConvertit);
console.log(typeof numarConvertit);

console.log(textConvertit);
console.log(typeof textConvertit);

// 1.4 Utilizarea template literals

let numePersoana = "Vlada";
let varstaPersoana = 21;

let propozitie = `Numele meu este ${numePersoana} și am ${varstaPersoana} de ani.`;

console.log(propozitie);

// 1.5 Schimbarea valorilor folosind o variabilă temporară

let a = 10;
let b = 20;

let temporar = a;
a = b;
b = temporar;

console.log("Valoarea lui a:", a);
console.log("Valoarea lui b:", b);

// 1.6 Verificarea valorilor null și undefined

function verificaValoare(valoare) {
    return valoare === null || valoare === undefined;
}

console.log(verificaValoare(null));
console.log(verificaValoare(undefined));
console.log(verificaValoare(25));
console.log(verificaValoare("Salut"));

// 1.7 Crearea și modificarea unui obiect
let persoana = {
    nume: "Vlada",
    varsta: 21,
    esteStudent: true
};

// Adăugarea unei proprietăți noi
persoana.oras = "Chisinau";

// Eliminarea unei proprietăți
delete persoana.varsta;

console.log(persoana);

// 1.8 Array cu valori de tipuri diferite
let valoriDiverse = [
    "Vlada",
    21,
    true,
    undefined,
    { oras: "Chisinau" }
];

// Parcurgerea array-ului
for (let element of valoriDiverse) {
    console.log(typeof element);
}

// 2.1 Funcție care returnează suma a două numere
function calculeazaSuma(numar1, numar2) {
    return numar1 + numar2;
}

let rezultatSuma = calculeazaSuma(10, 20);

console.log(rezultatSuma);

// 2.2 Calcularea ariei unui dreptunghi
function calculeazaAria(lungime, inaltime = 1) {
    return lungime * inaltime;
}

console.log(calculeazaAria(5, 3));
console.log(calculeazaAria(5));

// 2.3 Funcție anonimă pentru calcularea pătratului
let calculeazaPatrat = function(numar) {
    return numar * numar;
};

console.log(calculeazaPatrat(5));

// 2.4 Transformarea textului în litere mari și calcularea lungimii
function transformaText(text) {
    let textMare = text.toUpperCase();
    return textMare.length;
}

console.log(transformaText("Salut Vlada"));

// 2.5 Funcții care calculează dublul și pătratul unui număr

function calculeazaDublul(numar) {
    return numar * 2;
}

function calculeazaPatratNumar(numar) {
    return numar * numar;
}

function calculeazaRezultate(numar) {
    return {
        dublul: calculeazaDublul(numar),
        patratul: calculeazaPatratNumar(numar)
    };
}

console.log(calculeazaRezultate(5));

// 2.6 Funcție săgeată pentru calcularea sumei
const calculeazaSumaArrow = (numar1, numar2) => {
    return numar1 + numar2;
};

console.log(calculeazaSumaArrow(10, 20));

// 2.7 Aplicarea unei funcții asupra fiecărui element dintr-un array

function aplicaFunctie(array, functie) {
    let rezultate = [];

    for (let element of array) {
        rezultate.push(functie(element));
    }

    return rezultate;
}

// Funcția care dublează fiecare număr
function dubleaza(numar) {
    return numar * 2;
}

let numereInitiale = [1, 2, 3, 4, 5];

let rezultate = aplicaFunctie(numereInitiale, dubleaza);

console.log(rezultate);

// 3.1 Declararea unui obiect masina
let masina = {
    marca: "Porsche",
    model: "911 Turbo S",
    an: 2024
};

console.log(masina);

// 3.2 Accesarea proprietăților unui obiect

// Notația cu punct
console.log(masina.marca);
console.log(masina.model);

// Notația cu paranteze pătrate
console.log(masina["marca"]);
console.log(masina["model"]);

// 3.3 Adăugarea și actualizarea proprietăților

// Adăugarea unei proprietăți noi
masina.culoare = "Negru";

// Actualizarea proprietății an
masina.an = 2025;

console.log(masina);

// 3.4 Ștergerea unei proprietăți dintr-un obiect

delete masina.model;

console.log(masina);

// 3.5 Iterarea prin proprietățile unui obiect

for (let cheie in masina) {
    console.log("Cheie:", cheie);
    console.log("Valoare:", masina[cheie]);
}

// 3.6 Adăugarea unei metode în obiect

masina.descriere = function() {
    return `Marca: ${this.marca}, An: ${this.an}, Culoare: ${this.culoare}`;
};

console.log(masina.descriere());

// 3.7 Funcție care primește un obiect persoana

function descriePersoana(persoanaNoua) {
    return `Numele meu este ${persoanaNoua.nume} și am ${persoanaNoua.varsta} ani.`;
}

let persoanaNoua = {
    nume: "Vlada",
    varsta: 21
};

console.log(descriePersoana(persoanaNoua));

// 3.8 Verificarea existenței unei proprietăți

console.log("culoare" in masina);
console.log("model" in masina);

// 3.9 Crearea unui obiect imbricat

let casa = {
    adresa: {
        strada: "Stefan cel Mare",
        oras: "Chisinau"
    }
};

console.log(casa);

// 3.10 Crearea unui obiect student prin intermediul unei funcții

function creeazaStudent(nume, varsta, nota) {
    let student = {
        nume: nume,
        varsta: varsta,
        nota: nota
    };

    return student;
}

let studentNou = creeazaStudent("Vlada", 21, 10);

console.log(studentNou);

// 3.11 Clonarea obiectelor

// Clonare folosind Object.assign()
let masinaCopie1 = Object.assign({}, masina);

// Clonare folosind spread operator (...)
let masinaCopie2 = { ...masina };

console.log("Prima copie:", masinaCopie1);
console.log("A doua copie:", masinaCopie2);

// 3.12 Obiect calculator cu metode

let calculator = {
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

console.log("Adunare:", calculator.adunare(10, 5));
console.log("Scădere:", calculator.scadere(10, 5));
console.log("Înmulțire:", calculator.inmultire(10, 5));
console.log("Împărțire:", calculator.impartire(10, 5));

// 3.13 Destructurarea obiectelor

let telefon = {
    marca: "Apple",
    model: "iPhone 11 Pro",
    culoare: "Negru",
    an: 2019
};

let { marca, model, culoare } = telefon;

console.log("Marca:", marca);
console.log("Model:", model);
console.log("Culoare:", culoare);

// 4.1 Array cu trei orașe

let orase = ["Chișinău", "Paris", "Amsterdam"];

console.log("Primul oraș:", orase[0]);
console.log("Ultimul oraș:", orase[2]);

// 4.2 Adăugarea și ștergerea orașelor

orase.push("Roma");
orase.unshift("Londra");

orase.pop();

console.log(orase);

// 4.3 Parcurgerea unui array cu for

let culori = ["Roșu", "Albastru", "Verde", "Negru"];

for (let i = 0; i < culori.length; i++) {
    console.log(culori[i]);
}

// 4.4 Parcurgerea unui array cu forEach()

let animale = ["Pisică", "Câine", "Iepure", "Cal"];

animale.forEach(function(animal) {
    console.log("Animalul meu preferat este: " + animal);
});

// 4.5 Filtrarea numerelor mai mari de 10

function filtreazaNumere(numere) {
    return numere.filter(function(numar) {
        return numar > 10;
    });
}

let listaNumere = [5, 12, 8, 20, 3, 15];

let numereFiltrate = filtreazaNumere(listaNumere);

console.log(numereFiltrate);

// 4.6 Sortarea numerelor în ordine crescătoare

let numereDeSortat = [25, 4, 18, 10, 2, 35];

numereDeSortat.sort(function(a, b) {
    return a - b;
});

console.log(numereDeSortat);

// 4.7 Calcularea pătratelor folosind map()

function calculeazaPatrate(numere) {
    return numere.map(function(numar) {
        return numar * numar;
    });
}

let numerePentruPatrat = [2, 3, 4, 5];

let patrate = calculeazaPatrate(numerePentruPatrat);

console.log(patrate);

// 4.8 Calcularea sumei folosind reduce()

let numerePentruSuma = [10, 20, 30, 40, 50];

let sumaTotala = numerePentruSuma.reduce(function(suma, numar) {
    return suma + numar;
}, 0);

console.log("Suma totală:", sumaTotala);

// 4.9 Verificarea existenței unui element

let fructeVerificare = ["Măr", "Banana", "Portocală", "Kiwi"];

// Verificare folosind includes()
console.log(fructeVerificare.includes("Banana"));
console.log(fructeVerificare.includes("Piersică"));

// Verificare folosind indexOf()
console.log(fructeVerificare.indexOf("Portocală"));
console.log(fructeVerificare.indexOf("Piersică"));

// 4.10 Combinarea a două array-uri

let cuvinte1 = ["Bună", "Salut"];
let cuvinte2 = ["Ce", "Faci"];

// Metoda concat()
let cuvinteCombinate1 = cuvinte1.concat(cuvinte2);

// Metoda spread (...)
let cuvinteCombinate2 = [...cuvinte1, ...cuvinte2];

console.log("Cu concat():", cuvinteCombinate1);
console.log("Cu spread:", cuvinteCombinate2);

// 4.11 Array bidimensional - matrice 2x2

let matrice = [
    [1, 2],
    [3, 4]
];

console.log("Elementul de pe linia 1, coloana 2:", matrice[0][1]);

// 4.12 Eliminarea elementelor duplicate

function eliminaDuplicate(array) {
    return [...new Set(array)];
}

let numereCuDuplicate = [1, 2, 2, 3, 3, 4, 5, 5];

let numereFaraDuplicate = eliminaDuplicate(numereCuDuplicate);

console.log(numereFaraDuplicate);

// 4.13 Utilizarea slice() și splice()

let numereArray = [10, 20, 30, 40, 50];

// Crearea unui sub-array folosind slice()
let subArray = numereArray.slice(1, 4);

console.log("Sub-array:", subArray);

// Eliminarea elementului cu indexul 2 folosind splice()
numereArray.splice(2, 1);

console.log("Array după eliminare:", numereArray);

// 5.1 Selectarea unui element folosind getElementById()

let titluPagina = document.getElementById("titlu");

titluPagina.textContent = "Am modificat textul folosind JavaScript!";

// 5.2 Selectarea elementelor li folosind querySelectorAll()

let elementeLista = document.querySelectorAll("li");

elementeLista.forEach(function(element) {
    element.style.color = "blue";
});

// 5.3 Crearea și adăugarea unui paragraf

let container = document.getElementById("container");

let paragrafNou = document.createElement("p");

paragrafNou.textContent = "Acest paragraf a fost creat folosind JavaScript.";

container.appendChild(paragrafNou);

// 5.4 Modificarea atributului src al imaginii

let imagine = document.getElementById("imagine");

imagine.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9meJ0a6xlmZojRcLy0w2PZ5bvtmLNwCntHEpiJHCA&s=10";

// 5.5 Adăugarea unei clase CSS

let box = document.getElementById("box");

box.classList.add("highlight");

// 5.6 Eliminarea unui element din document

let paragrafDeSters = document.getElementById("paragrafDeSters");

paragrafDeSters.remove();

// 5.7 Adăugarea unui eveniment click

let buton = document.getElementById("buton");
let titlu2 = document.getElementById("titlu2");

buton.addEventListener("click", function() {
    titlu2.textContent = "Textul a fost modificat!";
});

// 5.8 Monitorizarea unui câmp de text

let campText = document.getElementById("campText");
let rezultatText = document.getElementById("rezultatText");

campText.addEventListener("input", function() {
    rezultatText.textContent = campText.value;
});

// 5.9 Selectarea primului și ultimului copil

let listaOrase = document.getElementById("listaOrase");

let primulOras = listaOrase.firstElementChild;
let ultimulOras = listaOrase.lastElementChild;

document.getElementById("primulOras").textContent =
    "Primul oraș: " + primulOras.textContent;

document.getElementById("ultimulOras").textContent =
    "Ultimul oraș: " + ultimulOras.textContent;

    // 5.10 Comutarea unei clase CSS

let elementActiv = document.getElementById("elementActiv");
let butonActiv = document.getElementById("butonActiv");

butonActiv.addEventListener("click", function() {
    elementActiv.classList.toggle("active");
});

// 5.11 Crearea dinamică a unui tabel

let tabel = document.createElement("table");

tabel.border = "1";

for (let i = 0; i < 3; i++) {
    let rand = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
        let celula = document.createElement("td");

        celula.textContent = "Rând " + (i + 1) + ", Coloana " + (j + 1);

        rand.appendChild(celula);
    }

    tabel.appendChild(rand);
}

document.getElementById("containerTabel").appendChild(tabel);

// 5.12 Crearea unei liste dinamice

let listaDinamica = document.getElementById("listaDinamica");
let butonAdauga = document.getElementById("butonAdauga");

let numarElemente = 1;

butonAdauga.addEventListener("click", function() {
    let elementNou = document.createElement("li");

    elementNou.textContent = "Elementul " + numarElemente;

    listaDinamica.appendChild(elementNou);

    numarElemente++;
});

// 6.1 Afișarea unui mesaj după 3 secunde

setTimeout(function() {
    console.log("Mesaj afișat după 3 secunde!");
}, 3000);

// 6.2 Crearea unui cronometru

let numarCronometru = 1;

let cronometru = setInterval(function() {
    console.log(numarCronometru);

    numarCronometru++;

    if (numarCronometru > 5) {
        clearInterval(cronometru);
        console.log("Cronometrul s-a oprit!");
    }
}, 1000);

// 6.3 Funcție cu callback

function salut(callback) {
    console.log("Salut! Bine ai venit!");

    callback();
}

function mesajFinal() {
    console.log("Aceasta este funcția callback!");
}

salut(mesajFinal);

// 6.4 Crearea unei Promise

function asteapta() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Promisiunea a fost rezolvată!");
        }, 2000);
    });
}

asteapta().then(function(rezultat) {
    console.log(rezultat);
});

// 6.5 Promise rezolvată sau respinsă

function verificaPromisiune(valoare) {
    return new Promise(function(resolve, reject) {
        if (valoare === true) {
            resolve("Promisiunea a fost rezolvată!");
        } else {
            reject("Promisiunea a fost respinsă!");
        }
    });
}

verificaPromisiune(true)
    .then(function(rezultat) {
        console.log(rezultat);
    })
    .catch(function(eroare) {
        console.log(eroare);
    });

    // 6.6 Funcție asincronă folosind async/await

async function afiseazaRezultat() {
    let rezultat = await asteapta();

    console.log(rezultat);
}

afiseazaRezultat();

// 6.7 Apelarea mai multor funcții Promise în lanț

function pasulUnu() {
    return new Promise(function(resolve) {
        resolve("Pasul 1 a fost executat!");
    });
}

function pasulDoi() {
    return new Promise(function(resolve) {
        resolve("Pasul 2 a fost executat!");
    });
}

function pasulTrei() {
    return new Promise(function(resolve) {
        resolve("Pasul 3 a fost executat!");
    });
}

pasulUnu()
    .then(function(rezultat) {
        console.log(rezultat);
        return pasulDoi();
    })
    .then(function(rezultat) {
        console.log(rezultat);
        return pasulTrei();
    })
    .then(function(rezultat) {
        console.log(rezultat);
    });

// 6.8 Preluarea datelor folosind fetch()

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(raspuns) {
        return raspuns.json();
    })
    .then(function(date) {
        console.log("Datele preluate de la API:");
        console.log(date);
        console.log("Titlul postării:", date.title);
        console.log("Conținutul:", date.body);
    })
    .catch(function(eroare) {
        console.log("A apărut o eroare:", eroare);
    });

    // 6.9 Utilizarea Promise.all() și Promise.allSettled()

let promisiuneUna = Promise.resolve("Prima promisiune");
let promisiuneDoua = Promise.resolve("A doua promisiune");
let promisiuneTrei = Promise.resolve("A treia promisiune");

// Promise.all()
Promise.all([promisiuneUna, promisiuneDoua, promisiuneTrei])
    .then(function(rezultate) {
        console.log("Promise.all():", rezultate);
    });

// Promise.allSettled()
let promisiunePatru = Promise.reject("A patra promisiune a fost respinsă!");

Promise.allSettled([
    promisiuneUna,
    promisiuneDoua,
    promisiunePatru
]).then(function(rezultate) {
    console.log("Promise.allSettled():", rezultate);
});