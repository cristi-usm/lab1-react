// 3.1

let masina = {
    marca: "Mercedes",
    model: "S-Class",
    an: 2020
}

// 3.2

console.log(masina.marca)
console.log(masina["model"])

// 3.3

masina.culoare = "Black"
masina.an = 2026

// 3.4

delete masina.model

// 3.5

for (let key in masina) {
    console.log(`${key}: ${masina[key]}`);
}

// 3.6

masina.descriere = function() {
    return `Masina:
    marca: ${this.marca}, an: ${this.an}
    culoare: ${this.culoare}.`;
};

// 3.7

function persoana(persoana = {nume: "Radu", varsta: 21}) {
    return `Salut, sunt ${persoana.nume} și am ${persoana.varsta} ani.`;
}

// 3.8

if("culoare" in masina){
    return true
}

// 3.9

let casa = {
    metriPatrati: 40,
    adresa: {
        strada: "str.Vasile Alecsandri ciota tam...",
        oras: "Chisinau navernoe"
    }
}

// 3.10

function student(nume, varsta, nota) {
    return {
        nume: nume,
        varsta: varsta,
        nota: nota
    };
}

// 3.11

let clone1 = Object.assign({}, masina);

let clone2 = { ...masina };

// 3.12

const calculator = {
    aduna: (a,b) => a + b,
    scade: (a,b) => a - b,
    produs: (a,b) => a * b,
    impartire: (a,b) => a / b
}

// 3.13

const { marca, model } = masina;



