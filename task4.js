// 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.

const arr = ["Chisinau", "Bucuresti", "Iasi"]

console.log(arr[0], arr.at(-1))

// 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.

arr.unshift("Balti")
arr.push("Cricova")
arr.pop()

// 4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.

const colors = ["red", "green", "blue"]

for (let i = 0; i < colors.length; i++) {
    console.log(`color is ${colors[i]}`)
}

// 4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.

const animals = ["dog", "cat", "bird"]
animals.forEach(el => {
    console.log(`${el} is my pet.`)
})

// 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.

const higherThan10 = (array) => {
    return array.filter(el => el > 10)
}

// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.

const nr = [6, 5, 4, 3, 2, 1]

nr.sort((a, b) => a - b)

// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.

const square = (array) => {
    return array.map(el => el * el)
}

// 4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.

const sum = (array) => {
    return array.reduce((a, b) => a + b, 0)
}

// 4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.

console.log(arr.includes("Balti"))
console.log(arr.indexOf("Balti"))

// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.

const words1 = ["hello", "world"]
const words2 = ["how", "are", "you"]

const combined = [...words1, ...words2]

// 4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.

const matrix = [
    [1, 2],
    [3, 4]
]

console.log(matrix[0][1])

// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.

const removeDuplicates = (array) => {
    return [...new Set(array)]
}

// 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.

const subArray = animals.slice(0, 2)
animals.splice(2, 1)