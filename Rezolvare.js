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