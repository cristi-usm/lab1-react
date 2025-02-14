//3.1
let masina = {
marca: "BMW",
model: "m5",
an: 2024
}
//3.2
console.log(masina.marca);
console.log(masina.model);
console.log(masina["marca"]);
console.log(masina["model"]);

//3.3
masina.culoare = "negru";
masina.an = 2023;

//3.4
delete masina.model;

//3.5
for (let cheie in masina) {
    console.log(`${cheie}: ${masina[cheie]}`);
}

//3.6
masina.descriere = function() {
    return `Marca: ${this.marca}, An: ${this.an}, Culoare: ${this.culoare}`;
};

console.log(masina.descriere());

//3.7
function descrierePersoana(persoana) {
    return `Salut, mă numesc ${persoana.nume} și am ${persoana.varsta} ani.`;
}

const persoana1 = { nume: "Alex", varsta: 25 };
console.log(descrierePersoana(persoana1));  

//3.8
console.log("culoare" in masina);

//3.9
const casa = {
    adresa:{
        strada:"Ion Creanga",
        oras:"Chisinau"
    }
};
console.log(casa.adresa.strada);
console.log(casa.adresa.oras);

//3.10
function obiectStudent(nume, varsta, nota) {
    return {nume,varsta, nota};
}

const student = obiectStudent("Ana", 20, 8.5);
console.log(student);

//3.11
const masina1 = { 
    marca1: "Toyota", 
    model1: "Corolla", 
    an1: 2022, 
    culoare1: "Rosu"}

const masinaClone1 = Object.assign({}, masina1);
const masinaClone2 = { ...masina1 };
console.log(masinaClone1);
console.log(masinaClone2);

//3.12
const calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => (b !== 0 ? a / b : "Eroare: Impartire la zero")
};

console.log(calculator.adunare(10, 5));   
console.log(calculator.scadere(10, 5));   
console.log(calculator.inmultire(10, 5)); 
console.log(calculator.impartire(10, 5)); 

//3.13
const masina2 = {
     marca2: "Ford",
     model2: "Focus",
     an2: 2018, 
     culoare2: "Albastru" };

const { marca2, model2, an2 } = masina2;

console.log(marca2); 
console.log(model2);  
console.log(an2);    

