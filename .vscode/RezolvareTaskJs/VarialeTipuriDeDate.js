//Varibile si Tipuri de date
// 1. Variabile și Tipuri de date
// ### 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. Atribuiți-le valori de tip *number*, *string* și *boolean*.
// ### 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.
// ### 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".
// ### 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).
// ### 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
// ### 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.
// ### 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.
// ### 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.

//1.1
var a =1;
let b= "Aaaaaaaaaaaaaa";
const c =true;
console.log(a);

//1.2
function thatReturnTypeOf(a){
  return typeof(a);
}
console.log(thatReturnTypeOf(a));

//1.3
let stringVar="3.14";
let numberVar=3.14;
let stringToNumber=typeof(Number(stringVar));
let numberToString=typeof(numberVar.toString());
console.log("Tipul de date al variabilei string_var :" + stringVar +" , este de tip : "+stringToNumber);
console.log("Tipul de date al variabile number_var: " + numberVar + ", este de tip : " + numberToString);

//1.4
const name = "Ana";
const age=21;
let prop= `Acum ${name} ,are ${age} de anisori!`
console.log(prop)

//1.5

let first=1
let second=2
let intermediar=null

intermediar=first
first=second
second=intermediar
console.log(first)
console.log(second)


//1.6

function checkIfVarIsUndefinedOrNull(field){
   if(field==null){
    console.log(`Variabila ${field} , este de tip null`)
   }else if(field==undefined){
      console.log(`Variabila ${field} , este de tip undefined`)
   }else{
    console.log(`Variabile ${field} este de timp:`+ typeof(field))
   }
}

checkIfVarIsUndefinedOrNull(null)



//1.7
let person={
  name:'Ana',
  age: 20,
  sad : true 
}

person.job="Bbb"
person.surname="rrrr"
console.log(person)
delete person.sad
delete person["surname"]
console.log(person)


//1.8
let mixedArray = [42, "hello", true, { name: "Alice" }, [1, 2, 3],'a',undefined]; 
for(let i=0;i<mixedArray.length;i++){
  console.log(typeof(mixedArray[i]))
}

mixedArray.forEach((elements)=>{
  console.log(typeof(elements))
})

