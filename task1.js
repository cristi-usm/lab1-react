// 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. Atribuiți-le valori de tip *number*, *string* și *boolean*.

var number = 10
let text = "Hello"
const isActive = true

// 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.

const f1 = (param) => typeof param

// 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".

let stringToNumber = Number("20")
let numberToString = number.toString()

// 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).

let name = "Dina"
let age = 20
const sentence = `My name is ${name} and I'm ${age} years old.`

// 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.

let temp
let a = 1
let b = 2
temp = a
a = b
b = temp

// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.

const f2 = (param) => {
    return param === null || param === undefined
}

// 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.

let persona = {
    name: "Dina",
    age: 20,
    isAwesomeStudent: true
}

delete persona.isAwesomeStudent
persona.favouriteFood = "Pizza"

// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.

const arr = [1, "bla bla", true, null, undefined]
arr.forEach(element => {
    console.log(typeof element)
})