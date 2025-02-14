//  4
//  4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
const arr2 = ["Ialoveni", "Cahul", "Ungheni"]
console.log(arr2[0], arr2[2])

//  4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
arr2.push("Kiev")
arr2.unshift("Milano")
//console.log(arr2)
arr2.pop()
console.log(arr2)

//  4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
const arrCulori = ['verde', 'galben', 'albastru', 'orange', 'rosu']

for(let i = 0; i<arrCulori.length; i++){
    console.log(arrCulori[i])
}

//  4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
const arrAnimale = ['urs', 'vulpe', 'arici', 'cal', 'pisica', 'oaie']
arrAnimale.forEach((element) => {console.log(`Eu sunt animalul tau favorit: ${element}`)})

//  4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
const arrNumere = [2, 8, 12, 17, 5, 120, -3, 569]

function peste10(arr){
    let rezultat = []
    for(let i = 0; i<arr.length; i++){
        if (arr[i] > 10){rezultat.push(arr[i])}
    }
    return rezultat
}

console.log(peste10(arrNumere))

//  4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
arrNumere.sort((a, b) => a - b)
console.log(arrNumere)

//  4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.
const arrNumere1 = [2, 3, 4, 5, 6, 7, 8]

const numereLaPatrat = arrNumere1.map((element) => element**2)
console.log(numereLaPatrat)

//  4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
const sumaNumerelor = arrNumere1.reduce((acc, curValue) => 
    acc + curValue, 0
)
console.log(sumaNumerelor) 

//  4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
console.log(arrNumere1.includes(5))
console.log(arrNumere1.indexOf(5)) //Returneaza index-ul unde apare prima data

//  4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
const arrCuvinte = ['minge', 'racheta', 'linie', 'arbitru']
const arrCuvinte1 = ['jucator', 'antrenor', 'portar', 'corner', 'offside']
const arrConcatenat = arrCuvinte.concat(arrCuvinte1) //prin concat
const arrConcatenatSpread = [...arrCuvinte, ...arrCuvinte1] //prin spread

console.log(arrConcatenat)
console.log(arrConcatenatSpread)

//  4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.
const arr2D = [["Element 1/1", 'Element 2/1'], ["Element 1/2", 'Element 2/2']]
console.log(arr2D[0][1])

//  4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
const arrDuplicate = ['Marius', 'Andrian', 'Ion', 'Andrian', 'Cristi', 'Cristi', 'Eugen']
const arrFaraDuplicate = [...new Set(arrDuplicate)]

console.log(arrFaraDuplicate)

//  4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.
const oameni = arrDuplicate.slice(0, 4)
console.log(oameni)

oameni.splice(2, 1)
console.log(oameni)

