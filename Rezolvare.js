var numar = 5;
let string = 'Victor';
const bool = true;

function tip(x) {
    switch (typeof x) {
        case "number":
            return "Number";
        case "bigint":
            return "Bigint";
        case "string":
            return "String";
        case "boolean":
            return "Boolean";
        case "null":
            return "Null";
        case "undefined":
            return "Undefined";
        default:
            break;
    }
}

console.log(tip("aleluia"));

let s1 = "123";
let x1 = Number(s1);

let x2 = 456;
let s2 = String(x2);

console.log(x1);
console.log(s2);

let nume = "Victor";
let varsta = 20;

console.log(`Ma numesc ${nume} si am ${varsta} ani`);

let a = 234;
let b = 567;
console.log(`a=${a} si b=${b} inainte de schimbare`);

let temp = a;
a = b;
b = temp;
console.log(`a=${a} si b=${b} dupa de schimbare`);

function nullSauUndefined(val) {
    if (val === null) {
        return "Variabila este de tip null";
    } else if (val === undefined) {
        return "Variabila este de tip undefined";
    } else {
        return "Variabila nu este nici null nici undefined";
    }
}

console.log(nullSauUndefined(0));

let masina = {
    marca: "Dacia",
    an: 2024,
    esteNoua: true
};

console.log("Obiect inițial:", masina);

masina.culoare = "Albastru";

let cheieNoua = "combustibil";
masina[cheieNoua] = "Electric";

console.log("După adăugare:", masina);

delete masina.an;

console.log("După eliminare:", masina);

let array = [1, "1", false, 9007199254740991n, undefined];

for (let i = 0; i < array.length; i++) {
    console.log(tip(array[i]));
}

function suma(x, y) {
    return x + y;
}

console.log(suma(5, 6));

function dreptunghi(x, y = 1) {
    return x * y;
}

console.log(dreptunghi(2, undefined));

const patrat = (n) => {
    return n * n;
}

console.log(patrat(8));

function lucruString(str) {
    str = str.toUpperCase();
    let x = str.length;
    return `Stringul ${str} are ${x} caractere`;
}

console.log(lucruString("ma numesc aliosa"));

const calculeazaDublu = (n) => n * 2;
const calculeazaPatrat = (n) => n * n;

function proceseazaNumar(numar) {
    return {
        original: numar,
        dublu: calculeazaDublu(numar),
        patrat: calculeazaPatrat(numar)
    };
}

console.log(proceseazaNumar(5));

const sumaSageata = (x, y) => x + y;
console.log(sumaSageata(5, 6));

let arr = [1, 2, 3, 4];
const patratArr = (x) => x * x;

function parcurge(arr, patrat) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = patrat(arr[i]);
    }
    return arr;
}

console.log(`Array inainte de modificare: ${arr}`);
console.log(`Array dupa modificare: ${parcurge(arr, patratArr)}`);

const masina2 = {
    marca: "Dacia",
    model: "Logan",
    an: 2024,
    descriere() {
        return `Masina: ${this.marca} ${this.model} ${this.an}`;
    }
};

console.log(masina2);

console.log(masina2.descriere());

console.log(masina2.marca);
console.log(masina2.model);

console.log(masina2["marca"]);
console.log(masina2["model"]);

masina2.culoare = "Albastru";
masina2.an = 2021;

console.log(masina2);

delete masina2.model;

console.log(masina2);

for (let cheie in masina2) {
    console.log(`${cheie}: ${masina2[cheie]}`);
}

console.log(masina2.descriere());

function salutarePersoana(om) {
    return "Salut, mă numesc " + om.nume + " și am " + om.varsta + " ani.";
}

const persoana = {
    nume: "Victor",
    varsta: 20
};

console.log(salutarePersoana(persoana));

if ("culoare" in masina) {
    console.log(`Proprietatea 'culoare' există în obiectul masina si este: ${masina.culoare}`);
} else {
    console.log("Proprietatea 'culoare' NU există.");
}

const casa = {
    tip: "Vila",
    camere: 4,
    adresa: {
        strada: "Bulevardul Victoriei 12",
        oras: "Chișinău",
        codPostal: "MD-2000"
    }
};

console.log(casa);

const creeazaStudent = (nume, varsta, nota) => {
    return {
        nume,
        varsta,
        nota
    };
};

const student = creeazaStudent("Victor", 20, 9);

console.log(student);

const masina3 = {
    marca: "Dacia",
    model: "Logan",
    an: 2021
};

const masinaSpread = { ...masina3 };
const masinaSpreadNoua = { ...masina3, culoare: "Roșu" };
console.log(masinaSpread);
console.log(masinaSpreadNoua);

const masinaAssign = Object.assign({}, masina3);

console.log(masinaAssign);

const calculator = {
    adunare: (a, b) => a + b,

    scadere: (a, b) => a - b,

    inmultire: (a, b) => a * b,

    impartire: (a, b) => {
        if (b === 0) {
            return "Eroare: Împărțirea la zero nu este permisă!";
        }
        return a / b;
    }
};

console.log("Adunare (5 + 3):", calculator.adunare(5, 3));
console.log("Scădere (10 - 4):", calculator.scadere(10, 4));
console.log("Înmulțire (7 * 6):", calculator.inmultire(7, 6));
console.log("Împărțire (20 / 5):", calculator.impartire(20, 5));
console.log("Împărțire (10 / 0):", calculator.impartire(10, 0));

const { marca, model } = masina3;

console.log(marca);
console.log(model);

const arrOrase = ["Chisinau", "Balti", "Ungheni"];
console.log(arrOrase[0]);
console.log(arrOrase[arrOrase.length - 1]);

arrOrase.unshift("Orhei");
arrOrase.push("Sangera");
console.log(arrOrase);

arrOrase.pop();
console.log(arrOrase);

const culori = ["rosu", "albastru", "verde"];

for (let i = 0; i < culori.length; i++) {
    console.log(culori[i]);
}

const animale = ["pisică", "câine", "lup", "urs"];

animale.forEach((animal, index) => {
    console.log(`Animalul nr. ${index + 1} din listă este: ${animal}.`);
});

const filtreazaNumereMari = (lista) => lista.filter(numar => numar > 10);

const numere = [5, 12, 8, 130, 44];
console.log(filtreazaNumereMari(numere));

numere.sort((a, b) => a - b);

console.log(numere);

const numereLaPatrat = numere.map(n => n * n);

console.log(numereLaPatrat);

const suma2 = numere.reduce((acumulator, valoareCurenta) => {
    return acumulator + valoareCurenta;
}, 0);

console.log(suma2);

const fructe = ["măr", "banană", "portocală"];

const areBanana = fructe.includes("banană");
console.log(areBanana);

if (fructe.includes("struguri")) {
    console.log("Avem struguri!");
} else {
    console.log("Nu am găsit struguri în listă.");
}

const pozitieVerde = culori.indexOf("verde");
console.log(pozitieVerde);

if (culori.indexOf("galben") !== -1) {
    console.log("Culoarea există în array.");
} else {
    console.log("Culoarea nu a fost găsită.");
}

const legume = ["morcov", "cartof"];
const mancare = [...fructe, ...legume];
console.log(mancare);

const matrice = [
    [10, 20],
    [30, 40]
];

const element = matrice[0][1];
console.log(element);

const eliminaDuplicate = (lista) => {
    return [...new Set(lista)];
};

const numere2 = [1, 2, 2, 3, 4, 4, 5, 1];
const numereUnice = eliminaDuplicate(numere2);

console.log(numereUnice);

const culori2 = ["roșu", "verde", "albastru", "galben", "negru"];

const subCulori = culori2.slice(0, 3);

console.log("Sub-array:", subCulori);

const cifre = [10, 20, 30, 40, 50];

const elementSters = cifre.splice(2, 1);
console.log("Array-ul după eliminare:", cifre);

const elementTitlu = document.getElementById("titlu-principal");

if (elementTitlu) {
    elementTitlu.innerText = "Textul a fost modificat cu succes!";
}

const elementeLista = document.querySelectorAll("li");

elementeLista.forEach((item) => {
    item.style.color = "blue";
});