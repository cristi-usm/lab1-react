// ## 3. Obiecte
// ### 3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
// ### 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
// ### 3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
// ### 3.4 Ștergeți proprietatea model din obiect.
// ### 3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
// ### 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.
// ### 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
// ### 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
// ### 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.
// ### 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu proprietățile **nume**, **varsta** și **nota**.
// ### 3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
// ### 3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
// ### 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.

//3.1
const masica={
    marca:'Audi',
    model:'Aaa',
    an:2010,
}
//3.2
console.log(masica.marca);
console.log(masica.model);
console.log(masica['model']);
console.log(masica['marca']);

//3.3
masica.culoare='alb'
masica.an=2020
console.log(masica)

//3.4
delete masica.model
console.log(masica)

//3.5
for(elements in masica){
    console.log("Obiectul Masiva are : " + elements +" = " +masica[elements])
}

//3.6
const masinaCuDescriere = {
    marca: 'Audi',
    model: 'Aaa',
    an: 2010,
    descriere: function() {
        console.log(`Mașina este de marca ${this.marca}, anul producerii ${this.an}, iar modelul este ${this.model}.`);
    }
    // ! daca avem o methoda in obj si accesam prop.trebuie se folosit this , prop apartin obj dar nu al functiei 
};
masinaCuDescriere.descriere(); 


//3.7
const persona={
    nume:'Aaa',
    varsta:12
}

function mersajPers(persoana){
   return (`Persoana cu numele ${persoana.nume}, are ${persoana.varsta} anisori`)
}
console.log(mersajPers(persona))

//3.8
const check='culoare'in masica
if(check){
    console.log("Masina are culoarea:"+masica.culoare)
}else{
    console.log("Masina n-are culoare")
}


//3.9
const casa={
    adresa:{
      oras:'Aaa',
      adresa:'Bbb'  
    }
}

//3.10

function funcThatCreateObj(nume,varsta,nota){
    return {
        nume: nume,
        varsta: varsta,
        nota:nota,
    }
}
console.log(funcThatCreateObj('Ana',20,10))


//3.11
let cloneWithSpreedCar = { ...masica};
console.log("Masinica sa clonat", cloneWithSpreedCar)


let cloneWithSpreedHouse ={ ...casa}
console.log("Casuta sa clonat : ",cloneWithSpreedHouse)

let cloneWithObjectAssignCar=Object.assign({},masica)
console.log("Masina sa clonat:" , cloneWithObjectAssignCar)

let cloneWithObjectAssignHouse=Object.assign({},casa)
console.log("Casa sa clonat", cloneWithObjectAssignHouse)

//3.12
const calculator={
  adunare: function(a,b){
    return a+b;
  },

  scadere:function(a,b){
    return a-b;
  },

  inmultire:function(a,b){
    return a*b;
  },

  impartire: function(a,b){
   if(a==0){
    console.log("Impartirea la 0 nu-i posibila")
   }else{
   return a/b;
   }}}

console.log("Adunarea:",calculator.adunare(1,2) )   
console.log("Scadere:",calculator.scadere(2,4))
console.log("Inmultirea:",calculator.inmultire(6,2))
console.log("Impartirea:",calculator.impartire(6,2))
console.log("Impartirea:",calculator.impartire(20,2))


//3.13

const aa={
a:1,
b:2,
c:3,
d:1233,
ee:345554
}

let {a,b,c,d,ee}=aa
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(ee)

const bbb={
    first:'a',
    second:'b',
    third:'c',
    d:'d',
    e:'e',
    f:'f',
    t:'t'
}

let {first,second,third, ...rest}=bbb
console.log(first)
console.log(second)
console.log(third)
console.log(rest)

