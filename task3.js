// 3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. 
// Atribuiți valori pentru fiecare proprietate.

const car = {
    brand: "Toyota",
    model: "Corolla",
    age: 2018
}

// 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.

console.log(`This is ${car.brand} model ${car["model"]}`)

// 3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.

car.color = "red"
car.age = 2026

// 3.4 Ștergeți proprietatea model din obiect.

delete car.model

// 3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.

for(const prop in car) {
    console.log(`car.${prop} = ${car[prop]}`)
}

// 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.

car.description = function () {
    return `${car.brand}, ${car.color}, ${car.age}`
}

// 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și 
// returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.

const msg = (per) => {
    return `Hello, my name is ${per.name}, I'm ${per.age} years old.`
}

// 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.

console.log("color" in car)

// 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.

const house = {
    adress: {
        strada: "str. Maria",
        oras: "Chisinau"
    }
}

// 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu 
// proprietățile **nume**, **varsta** și **nota**.

const student = (name, age, grade) => {
    return {
        name,
        age,
        grade
    }
}

// 3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.

const clone1 = Object.assign({}, car)
const clone2 = {...car}

// 3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

// 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.

const { brand, age } = car
