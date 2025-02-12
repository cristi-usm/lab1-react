//1.1
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

//1.2
function tipDeDate(variable) {
    return typeof variable;
}

var numar = 42;
var text = "Hello";
var boolean = true;

console.log(tipDeDate(numar));
console.log(tipDeDate(text));
console.log(tipDeDate(boolean));

//1.3
let stringToNumber = Number("123");
console.log(stringToNumber);

let numberToString = String(456);
console.log(numberToString);

//1.4
let nume = "Denis";
let varsta = 20;

let propozitie = `Numele meu este ${nume} și am ${varsta} ani.`;
console.log(propozitie);

//1.5
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b);

//1.6
function verificare(val) {
    return val == null;
}

console.log(verificare(null));      
console.log(verificare(undefined));

//1.7
let obiect = { nume:"Denis", varsta: 27, student: true};
delete obiect.student;
console.log(obiect);

//1.8
let array = [42, "text", true, {nume:"Denis"}, [1, 2, 3] ];
array.forEach(el => console.log(typeof el));


//2.1
function suma(a,b) {
    return a + b;
}
console.log(suma(3, 7));

//2.2
function ariaDreptunghiului(latime, inaltime = 1) {
    return latime * inaltime;
}
console.log(ariaDreptunghiului(20));

//2.3
const patrat = function(numar) {
    return numar * numar;
}
console.log(patrat(5));

//2.4
function upperCase(text) {
    let upperText = text.toUpperCase();
    return [upperText, upperText.length];
}
console.log(upperCase("Salut"));

//2.5
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

//2.6
const sageata = (a, b) => a + b;
console.log(sageata(1, 2));

//2.7
function altaFunctie(array, functie) {
    return array.map(functie);
}
console.log(altaFunctie([1, 2, 3], dublu));
