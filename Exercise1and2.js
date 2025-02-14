//1. Variabile și Tipuri de date
// 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. 
var myName = 'Maghrus';
let num = 11;
const boolValue = true;

// 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.
function tipVariabila(variabila) {
    return typeof variabila
}

//console.log(tipVariabila(num))

// 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".
const number2 = "220"
const number3 = Number(number2)
const numberToString = String(num)

// 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).
const nume = 'Marius'
const varsta = 20
const propozitie = `Ma numesc ${nume} și am ${varsta} ani.`
//console.log(propozitie)

// 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
let a = 10
let b = 7
//console.log(a, b)
let temp = a
a = b
b = temp
//console.log(a, b)

// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.
function verificaVariabila(variabila) {
    if (variabila == null || variabila == undefined) { return true }
    return false
}

let valoareNull = null
let valoareUndefined
// console.log(verificaVariabila(valoareNull))
// console.log(verificaVariabila(valoareUndefined))

// 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.
const chillGuy = {
    nume: 'Ionel',
    greutate: 110,
    student: false
}

chillGuy["fotbalist favoirit"] = "Messi"
console.log(chillGuy)

delete chillGuy.greutate
console.log(chillGuy)

// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
const myArray = [12, "bus", false, [1, 2, 3], undefined]

for (variabila of myArray) {
    console.log(typeof variabila)
}



//2. Funcții
// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function suma(nr1, nr2) {
    return nr1 + nr2
}
//console.log(suma(10, 20))

// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.
function ariaDreptunghi(lungime, latime = 1) {
    return lungime * latime
}

// console.log(ariaDreptunghi(10))
// console.log(ariaDreptunghi(10, 14))

// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
let laPatrat = function (nr) {
    return nr * nr
}
// console.log(laPatrat(2))

// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function modificaString(sir) {
    let sirUpper = sir.toUpperCase()
    let nrLitere = sir.length

    return `Sirul '${sirUpper}' are lungimea de ${nrLitere} caractere`
}
// console.log(modificaString('astazi vreau sa mananc kebab'))

//2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
function doubleNum(num) {
    return num * 2
}

function creareObiect(num) {
    let dublul = doubleNum(num)
    let power = laPatrat(num)
    return {
        dublul: dublul,
        'la patrat': power
    }
}

//console.log(creareObiect(5))

//2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
const sumaArrow = (a, b) => { return a + b }
//console.log(sumaArrow(10, 21))

//2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 
const arr1 = [2, 4, 6, 8, 10]

function aplicaFunctie(array) {
    let rezultat = []
    array.forEach((el) => {
        rezultat.push(doubleNum(el))
    })
    return rezultat
}

//console.log(aplicaFunctie(arr1))





