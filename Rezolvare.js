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