// 3.1
const masina = {
  marca: "BMW",
  model: "M5",
  an: 2018,
  descriere: function () {
    return `Marca ${this.marca}, model ${this.model}, anul ${this.an}`;
  },
};

// 3.2
console.log(masina.marca);
console.log(masina.model);

console.log(masina["marca"]);
console.log(masina["model"]);

// 3.3

masina.culoare = "Albastru";
masina.an = 2020;
console.log(masina);

// 3.4

delete masina.model;

console.log(masina);

// 3.5

for (let key in masina) {
  console.log(key + ":", masina[key]);
}

// 3. 6

console.log(masina.descriere());

// 3.7

function myObj(obj) {
  return `Buna ma numesc: ${obj.nume}, am varsta de: ${obj.varsta} ani.`;
}

const obj = {
  nume: "Vanesa",
  varsta: 89,
};

console.log(myObj(obj));

// 3.8

console.log("culoare" in masina);

// 3.9

const casa = {
  adresa: {
    strada: "Stefan Cel Mare",
    oras: "Chisinau",
  },
};

console.log(casa);

// 3.10

function myStudent(nume, varsta, nota) {
  let obj = {
    nume: nume,
    varsta: varsta,
    nota: nota,
  };
  return obj;
}

const result = myStudent("Valentina", 23, 7);

console.log(result);

// 3.11
const clone = Object.assign(masina, casa);
console.log(clone);

const clone2 = { ...casa, ...masina };
console.log(clone2);

// 3.12

const calculator = {
  adunare: function (a, b) {
    return a + b;
  },
  scadere: function (a, b) {
    return a - b;
  },
  inmultire: function (a, b) {
    return a * b;
  },
  impartire: function (a, b) {
    if (b === 0) {
      return "Nu se imparte la 0";
    } else {
      return a / b;
    }
  },
};

console.log(calculator.adunare(16, 15));
console.log(calculator.scadere(10, 2));
console.log(calculator.inmultire(4, 4));
console.log(calculator.impartire(8, 3));

// 3.13

let { marca, an, model } = masina;

console.log(marca);
console.log(an);
console.log(model);
