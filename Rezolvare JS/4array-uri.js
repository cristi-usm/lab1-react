
//4. Array-uri
//4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
let orase = ["Balti","Cahul","Paris"]
console.log(orase[0],orase[orase.length-1])

//4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
orase.push("Roma")
orase.unshift("Chisinau")
console.log(orase[0],orase[orase.length-1])
orase.pop()
console.log(orase[0],orase[orase.length-1])

//4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element.
let colors = ["albastru","verde","galben","rosu","negru"]
for(i=0;i<colors.length;i++){
  console.log(colors[i])
}

//4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
let animals = ["leu","zebra","girafa","ghepard","crocodil","gorila"]
animals.forEach((value, index, array)=>{
  console.log(`Acesta este un ${value} are indexul ${index} in array`)
})

//4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.
let numere = [1,2,3,3,22,21]
function nrMMD10(array){    
  let numereMari = []
  for(i=0;i<=array.length;i++){
    if(array[i]>10){
       numereMari.push(array[i])
    }
  }    
  return   console.log(`Numerele ${numereMari} sunt mai mari decat 10`)

}
nrMMD10(numere)

//4.6 Declarați un array de numere și sortați-l în ordine crescătoare. 
console.log(numere.sort(function(a, b){return a - b}).reverse()) //am folosit array-ul de nr de mai sus

//4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.
let patratulNr = numere.map((numar)=>numar*numar) 
console.log(patratulNr)

//4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.
console.log(numere.reduce((valoarePrecedenta,valoareCurenta)=>valoarePrecedenta+valoareCurenta))

//4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.
console.log(animals.includes("leu")) // -returneaza True/False
console.log(animals.indexOf("zebra")) // -returneaza indexul

//4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).
let combinat = {...animals,...colors}
console.log(combinat)

let combinat1 = animals.concat(orase)
console.log(combinat1)

//4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.
let biarray = [
  ["Nume", "Prenume"],
  ["Ion", "Manascurta"]
  ["Marin", "Manascurta"]
];
console.log(biarray[0][1])

//4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
function deleteSameElement(array){
  return array.filter((value, index) => array.indexOf(value) === index);
}
console.log(deleteSameElement(numere))

//4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.
const fructe = ["Banana", "Portocala", "Lamaie", "Mar", "Mango"];
const fructeExport = fructe.slice(1);
console.log(fructeExport)
fructeExport.splice(2,1)
console.log(fructeExport)