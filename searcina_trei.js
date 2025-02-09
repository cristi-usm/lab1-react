// 3.1
const masina = {
    "marca": "Ceva marca",
    "model": "Ceva model",
    "an": 2015
}


// 3.2
console.log(masina.marca)
console.log(masina["model"])

// 3.3
masina.color = "Sur"

// 3.4
delete masina.model

// 3.5
for (const key in masina) {
    if (Object.prototype.hasOwnProperty.call(masina, key)) {
        const element = masina[key];
        console.log(`cheie: ${key}, valoare: ${element}`)
    }
}

// 3.6
const aboutCar = () => {
    str = `marca: ${masina["marca"]} an: ${masina["an"]} culoarea: ${masina["color"]}`
    return str
}

masina.info = aboutCar()

// 3.7
const persoana = {
    "nume": "Vlad",
    "varsta": 20
}

const mesajPersoana = (obj) => {
    return `nume: ${obj.nume} varsta: ${obj.varsta}`
}

console.log(mesajPersoana(persoana))

// 3.8
console.log("color" in masina)

// 3.9
const casa = {
    "adresa": adresa = {
        "strada": "Nume Strada",
        "oras": "Nume Oras"
    }
}

// 3.10
const studentCreator = (nume, varsta, nota) => {
    const student = {
        "nume": nume,
        "varsta": varsta,
        "note": note
    }
    return student
}

// 3.11
let nouaMasina = {}
Object.assign(nouaMasina, masina)
const incaONouaMasina = {...masina}

console.log(nouaMasina)
console.log(incaONouaMasina )

// 3.12
const sum = (a, b) => a + b
const dif = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => b !== 0 ? a / b : console.log("Numitor nu poate fi egal cu 0")  

const calculator = {
    sum(a, b) {return a + b},
    dif(a, b) {return a - b},
    mul(a, b) {return a * b},
    div(a, b) {return b !== 0 ? a / b : "Numitor nu poate fi egal cu 0"},
}

console.log(calculator.div(4, 0))

// 3.13
const { marca, color } = masina
console.log(marca)
console.log(color)
