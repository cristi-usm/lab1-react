// 4.1

let orase = ["Chisinau", "Soldanesti", "Straseni"];
console.log(orase[0]); 
console.log(orase[orase.length - 1]); 

// 4.2

orase.push("Ialoveni")
orase.unshift("Druvoi oras")
orase.pop()

// 4.3

let culori = ["rosu", "verde", "albastru", "galben", "cafeniu"]
for (let i = 0; i < culori.length; i++) {
    console.log(culori[i])
}

// 4.4

let animale = ["elefant", "muravied", "sinicika", "kapibara", "bagamol"]
animale.forEach(animal => console.log(`-> ${animal}`))

// 4.5

function maiMariDe10(numere) {
    return numere.filter(n => n > 10)
}

// 4.6

let numere = [1, -1, 2, -2, 55, -3, 57392]
numere.sort((a, b) => a - b)

// 4.7

let patrate = numere.map(n => n * n)

// 4.8

let sum = numere.reduce((total, n) => total + n, 0)

// 4.9

console.log(animale.includes("elefant"))
console.log(animale.indexOf("elefant"))

// 4.10

let list1 = ["minge", "microfon", "caldare"]
let list2 = ["gey-parad", "pastile"]


let  totalList= [...list1, ...list2]

// 4.11

let matrice = [
    [0, 1], 
    [1, 0]  
]
console.log(matrice[0][1])

// 4.12

function faraDuplicate(arr) {
    return [...new Set(arr)];
}

// 4.13

let el = ["A", "B", "C", "D", "E"]

let subArray = el.slice(0, 2)

el.splice(2, 1)