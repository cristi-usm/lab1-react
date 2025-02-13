
//1
//1.1
var d = 10;
let text = "buna";
const truth = true;

//1.2
function getType(variabila) {
return typeof variabila;
}

console.log(getType(d));   
console.log(getType(text));   
console.log(getType(truth)); 


//1.3
let x = "123";
let numFromString = Number(x);

let y = 456;
let strFromNum = y.toString();

console.log(numFromString);
console.log(strFromNum);


//1.4
let nume = "Livia";
let varsta = 21;

let mesaj = `${nume} are ${varsta} ani`;
console.log(mesaj);


//1.5
let a = 23;
let b = 10;

let schimb = a;
a = b;
b = schimb;
console.log("a:", a);
console.log("b:", b);


//1.6
function verificaVar(valoare) {
    if (valoare === null) {
        return "Este null";
    } else if (valoare === undefined) {
        return "Este undefined";
    } else {
        return "Este de alt tip";
    }
}
console.log(verificaVar(null));
console.log(verificaVar(undefined));
console.log(verificaVar(2));


//1.7
let persoana = {
    nume: "Livia",
    varsta: 21,
    studenta: true
};
persoana.universitate = "USM";
delete persoana.varsta;
console.log(persoana);

//1.8
let array = [12, null, "salut", false, {nume:"Liv"}];

array.forEach(element => {
    console.log(typeof element);
});

