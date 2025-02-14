//3
//  3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
const masina = {
    marca: "Opel",
    model: "Zafira",
    an: 2003
}

//  3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
console.log(masina.marca, masina.model, masina.an)
console.log(masina["marca"], masina["model"], masina["an"])

//  3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
masina.culoare = "neagra"
masina.an = 2007
console.log(masina)

//  3.4 Ștergeți proprietatea model din obiect.
delete masina.model
console.log(masina)

//  3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
for (const element in masina){
    console.log(`${element}: ${masina[element]}`)
}

//  3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.
masina.descriere = function(){
    return `Masina este de marca ${masina.marca}, fiind din anul ${masina.an}, de culoarea ${masina.culoare}.`
}

console.log(masina.descriere())

//  3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
const persoana = {
    nume: "Ion",
    varsta: 22
}

function mesajPersonalizat(obj){
    return `Te numesti ${obj.nume} si ai ${obj.varsta} de ani.`
}

console.log(mesajPersonalizat(persoana))

//  3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
console.log("culoare" in masina)

//  3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.
const casa = {
    adresa: {
        strada: "",
        oras: ""
    }
}

console.log(casa.adresa.oras)

//  3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu proprietățile **nume**, **varsta** și **nota**.
function creeazaStudent(nume, varsta, nota){
    return {
        nume: nume,
        varsta: varsta,
        nota: nota
    }
}

console.log(creeazaStudent("Marius", 10, 10))

//  3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
const clonaMasina = Object.assign({}, masina)
clonaMasina.marca = "Audi"
console.log(clonaMasina)

const clonaMasina1 = {...masina}
clonaMasina1.an = 2004
console.log(clonaMasina1)

//  3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
const calculator = {
    adunare: function(a, b){
        return a + b
    },

    scadere: function(a, b){
        return b - a
    },

    inmultire: function(a, b){
        return a * b
    },

    impartire: function(a, b){
        if ( b !== 0){
            return a / b
        } else {
            return 'Nu se poate efectua impartirea la 0!'
        }
    }
}

console.log(calculator.inmultire(10, 12))

//  3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
let {marca, an, culoare} = masina
console.log(marca)
marca = 'Nissan'

console.log(marca)
console.log(masina)
