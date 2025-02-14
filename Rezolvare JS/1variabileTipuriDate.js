//1. Variabile și Tipuri de date
//1.1 Declarați trei variabile utilizând var, let, și const. Atribuiți-le valori de tip number, string și boolean.
let number = 1.1
var number1 = -2
const number2 = 456

let string = "123"
var string1 = "Second string"
const string2 = "Third string"

let boolean = true
var boolean1 = false
const boolean3 = true

// 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând typeof.
function returnType(parametru) {
    return console.log (typeof(parametru))
  }

returnType(boolean3)

//1.3 Convertiți o valoare de tip string în number și invers. Exemplu: "123" → 123 și 456 → "456".
console.log("String \"123\" -> number 123:")
returnType(Number(string))
console.log("Number 456 -> string \"456\":")
returnType(String(number2))

//1.4 Declarați două variabile (nume, varsta) și creați o propoziție utilizând șabloane de string-uri (template literals - ``).
const nume = "Ion"
const prenume = "Vasilache"
const propozitie =`Ieri ${nume} ${prenume} a cumparat o paine si un kg de cartofi`
console.log(propozitie)

//1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
let a = 1
let b = 2 
let c
c=a
a=b
b=c
console.log(`Variabila a schimbata = ${a} \nVariabila b schimbata = ${b}`)

//1.6 Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.
let testVar =undefined
function verificaNullUndefined(parametru){
  if(parametru===null){
    console.log("Variabila este de tip null")
  }
  else if(parametru===undefined){
    console.log("Variabila este de tip undefined")
  }
  else{
    console.log("Variabila nu este de tip null sau undefined")
  }
}
verificaNullUndefined(testVar)

//1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.
const planta = {
  specie : "silax alba (salcam)",
  varsta : 30,
  altoit : true
}
console.log(planta)
planta.inaltime = 45
console.log(planta)
delete planta.inaltime
console.log(planta)

//1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
const array = [123,"123",true,null,undefined]
for(i=0;i<array.length;i++){
  returnType(array[i]) //-am folosit functia declarata mai sus
}