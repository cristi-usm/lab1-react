//3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.
const masina = {
  marca: "Tesla",
  model: "Roadster",
  an: 2026,
};

//3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
console.log("3.2");
console.log(masina.marca);
console.log(masina.model);
console.log(masina["marca"]);
console.log(masina["model"]);
console.log("-----------------");

//3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.
masina.culoare = "pink";
masina.an = 2025;

//3.4 Ștergeți proprietatea model din obiect.
console.log("3.4");
delete masina.model;
console.log(masina.model);
console.log("-----------------");

//3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
console.log("3.5");
for (item in masina) {
  console.log(`${item}: ${masina[item]}`);
}
console.log("-----------------");

//3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină.
console.log("3.6");
function descriere() {
  return `An: ${masina.an}, Culoare: ${masina.culoare}, Marca: ${masina.marca};`;
}
masina.descriere = descriere();
console.log(masina.descriere);
console.log("-----------------");

//3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
console.log("3.7");
const persoana = {
  nume: "Rebeca",
  varsta: 26,
};

const person = (obj) => {
  return `This is ${obj.nume}. She is ${obj.varsta} years old.`;
};

console.log(person(persoana));
console.log("-----------------");

//3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
console.log("3.8");
console.log("culoare" in masina);
console.log("-----------------");

//3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
const casa = {
  adresa: {
    strada: "Strada Alexandru Bernardazzi 66",
    oras: "Chisinau",
  },
};

//3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
console.log("3.10");
const func = (nume, varsta, nota) => {
  const student = {
    nume: `${nume}`,
    varsta: `${varsta}`,
    nota: `${nota}`,
  };
  return student;
};
console.log(func("Ion", 19, 10));
console.log("-----------------");

//3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.
console.log("3.11");
const masina1 = Object.assign({}, masina);
console.log(masina1);

const masina2 = { ...masina };

console.log(masina2);
console.log("-----------------");

//3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
console.log("3.12");

const adunare = (a, b) => {
  return a + b;
};

const scadere = (a, b) => {
  return a - b;
};
const inmultire = (a, b) => {
  return a * b;
};
const impartire = (a, b) => {
  return a / b;
};
const calculator = {
  adunare,
  scadere,
  inmultire,
  impartire,
};

console.log(calculator.adunare(3, 2));
console.log(calculator.scadere(9, 2));
console.log(calculator.inmultire(3, 7));
console.log(calculator.impartire(15, 3));
console.log("-----------------");

//3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
console.log("3.13");
const lunch = {
  course1: "soup",
  course2: "smashed potatoes",
  dessert: "tiramisu",
};

const { course1, course2 } = lunch;
console.log(course1, course2);
console.log("-----------------");
