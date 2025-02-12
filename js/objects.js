// 3. Obiecte
// 3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.
let car = {
    brand: "Audi",
    model: "RS7",
    year: 2023
};

// 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
console.log("Cu punct: " + car.brand + " " + car.model);
console.log("Cu []: "+ car["brand"] + " " +  car["model"] + "\n");

// 3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.
car.color = "Matt Black";
car.year = 2024;
console.log("Plus color, updated year");
console.log(car);

// 3.4 Ștergeți proprietatea model din obiect.
delete car.model;
console.log("Minus model");
console.log(car);
console.log("\n");

// 3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
console.log("For ... in loop")
for(property in car) {
    console.log(`${property}: ${car[property]}`);
}
console.log("\n");

// 3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină.
function description(){
    console.log(`Car brand ${car["brand"]} produced in ${car["year"]} in color ${car["color"]}`);
}
car.description = description();
console.log("\n");

// 3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
function person(){
    let person = {
        nume : "Cristina",
        varsta : 20
    }
    return `My name is ${person["nume"]} and I'm ${person["varsta"]} years old.`;
}
console.log(person());
console.log("\n");

// 3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
console.log("Verify if it has property color: ");
if('color' in car){
    console.log(`The car has the color ${car.color}`);
} else {
    console.log("No color property found.")
}
console.log("\n");
// 3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
let home = {
    type : "apartment",
    address : {
        city: "Chisinau",
        street: "str. Alba Iulia"
    }
}
console.log(home);
console.log("\n");

// 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
function student(name, age, grade){
    let student = {
        nume: name,
        varsta: age,
        nota: grade
    }
    console.log(student);
}
student("Cristina", 20, 10);
console.log("\n");

// 3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.
let person1 = {
    nume : "Cristina",
    varsta : 20
}
let newMe = Object.assign(person1, ...[car]);
console.log(newMe);
console.log("\n");

// 3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
let calculator = {
    add: (a,b) => { console.log(`Suma ${a} + ${b} = ${a+b}`);},
    minus: (a,b) => { console.log(`Diferenta ${a} - ${b} = ${a-b}`);},
    multiply: (a,b) => { console.log(`Inmultirea ${a} * ${b} = ${a*b}`);},
    divide: (a,b) => { if(b==0){ console.log("Cannot devide by zero"); }
    else { console.log(`Impartirea ${a} / ${b} = ${a/b}`);}}
}
calculator.add(15,18);
calculator.divide(91,15);
console.log("\n");

// 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
({nume, varsta, ...masina} = newMe);
console.log(masina);