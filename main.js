//ex 1.1
var numar=5;
let sir='Salutare';
const a=true;

//ex 1.2
function tipul(param){
    return typeof param;
}
console.log(tipul(sir));

//ex 1.3 
let text='787'
let nr=Number(text);
console.log(nr);
console.log(tipul(nr));

let num=897
let str=String(num);
console.log(str);
console.log(tipul(str))

//ex 1.4 
let nume='Cataleya';
let varsta=2;
console.log(`Numele este ${nume} si are varsta de ${varsta} ani.`);

//ex 1.5
let b=9;
let c=7;
let dt=b;
b=c;
c=dt;
console.log(b)
console.log(c)

//ex1.6 
function null_sau_undefined (v){
    return v===null || v===undefined;
  }
   let t=null
   let t2;
  console.log(null_sau_undefined(t))
  console.log(null_sau_undefined(t2))
  console.log(null_sau_undefined(a))
  
  //ex 1.7 
let transport = {
    tipul: 'Masina',
    num_locuri:4,
    esteFunctional: true
  }
  
  transport.viteza=250;
  console.log(transport)
  delete transport.esteFunctional;
  console.log(transport)

  //ex 1.8 
const arr=[2, true, 'stea', null, undefined];
for (let i=0; i<arr.length; i++){
  console.log(typeof arr[i])
}

//ex 2.1 
function suma(p1, p2){
    return p1+p2;
  }
  
  console.log('Suma numerelor:',suma(4, 6))

//ex 2.2 
function aria(lungimea, latimea=1){
    return lungimea*latimea;
  }
  console.log('Aria este: ',aria(3))
  console.log('Aria este: ',aria(3,4))

//ex 2.3 
let patrat=function(r){ return r*r};
console.log('Patratul numarului este: ', patrat(3))
console.log('Patratul numarului este: ', patrat(5))

//ex 2.4
function fn(s){
  console.log(s.toUpperCase());
  return s.length;
  }
  console.log('Numarul de caractere este', fn('Salut'));
  
//ex 2.5
function dublu(num){
  return num*2;
}

function patratul(num){
  return num*num;
}

function principala(num){
  return {
    dublu: dublu(num),
    patratul: patratul(num)
  }
}

console.log(principala(5));

 //ex 2.6 
const sum=(a,b)=>a+b;
console.log(sum(5,9))

//ex 2.7 

const ar=[1, 3, 5, 6];
function funArr(v, fn){
  return v.map(fn);
}
console.log(funArr(ar, dublu)); //functia dublu- de la ex 2.5 


//ex 3.1 
const masina={
  marca: 'Toyota',
  model:'RAV4',
  an: 2025
}

//ex 3.2 
console.log(masina.marca);
console.log(masina['marca']);
console.log(masina.model);
console.log(masina['model']);

//ex 3.3 
masina.culoare= 'negra';
masina.an=2024;
console.log(masina)

//ex 3.4 
delete masina.model;
console.log(masina)

//ex 3.5 
for (let i in masina){
  console.log(i, masina[i])
}

//ex 3.6 
masina.descriere=function() {
  return `Marca este ${this.marca}, Anul: ${this.an}, Culoarea: ${this.culoare}`;
}
console.log(masina.descriere());

//ex 3.7 
function date_persoana(persoana){
  return `Numele este ${persoana.nume} si are varsta: ${persoana.varsta}`;
}
 const pers={
   nume: 'Maria',
   varsta: 25
}
console.log(date_persoana(pers));

//ex 3.8 
if('culoare' in masina){
  console.log('Contine proprietatea "culoare".');}
  else{
    console.log('Nu contine proprietatea "culoare".')
  }

  //ex 3.9 
const casa={
  adresa: {
   strada: 'Liviu Damian',
   oras: 'Balti'
 }
}
console.log(casa);

//ex 3.10 
function creeaza(nume, varsta, nota){
  const student={
    nume: nume,
    varsta: varsta,
    nota: nota
  } 
  return student
}
console.log(creeaza('Mihai', 27, 7))
  
//ex 3.11 
const masina2=Object.assign(masina);
console.log(masina2)
const masina3={...masina};
console.log(masina3)

//ex 3.12
const calculator={
  adunare: function(a, b){return a+b},
  scadere: function(a, b){return a-b},
  inmultire: function(a, b){return a*b},
  impartire: function(a, b){if(b!==0){return a/b} else{return "Impartirea la 0 nu are sens."}}
  
}
console.log('Adunarea:', calculator.adunare(5, 2))
console.log('Scaderea:', calculator.scadere(5, 2))
console.log('Inmultirea: ', calculator.inmultire(5, 2))
console.log('Impartirea: ', calculator.impartire(5, 2))

//ex 3.13
const { marca: marcaMasinii} = masina;
console.log(marcaMasinii);  
const { nume: numelePersoanei}=pers; 
console.log(numelePersoanei); 
 
//ex 4.1 
const orase=['Mardin', 'Tokyo', 'Ankara'];
console.log('Primul element: ', orase[0])
console.log('Ultimul element: ', orase[orase.length-1]);

//ex 4.2 
orase.push('Chisinau')
orase.unshift('Istanbul')
console.log(orase)

orase.pop();
console.log(orase);

//ex 4.3 
const culori=['alb', 'negru', 'rosu', 'verde', 'albastru'];
for (let i=0; i<culori.length; i++){
  console.log(culori[i]);
}

//ex 4.4 
const animale=['caine', 'pisica', 'papagal', 'zebra'];
animale.forEach((el, index)=>{console.log(`Elementul de la pozitia ${index} este: ${el}`)})

//ex 4.5 
function num_mai_mari_ca_zece(arr){
  return arr.filter(el=>el>10);
}
console.log("Numerele mai mari ca zece sunt: ", num_mai_mari_ca_zece([6, 8, 12, 46, 4, 99]))

//ex 4.6 
const numere=[2, 6, 4, 8, 2, 99, 35];
numere.sort((a, b)=>a-b)
console.log(numere)

//ex 4.7 
const n=[5, 7, 9, 2, 4]
function patratele_numerelor(arr){
  return arr.map(el=>el*el)
}
console.log(patratele_numerelor(n))

//ex 4.8 
const sm=n.reduce((acc, el)=>acc+el, 0);
console.log('Suma numerelor este: ', sm);

// ex 4.9 
console.log(n.includes(0));
console.log(n.includes(5))
console.log(n.indexOf(3))
console.log(n.indexOf(2))

//ex 4.10 
const sir1=['bomboane', 'ciocolate', 'tort'];
const sir2=['biscuiti', 'suc', 'seminte'];
const combinatie=[...sir1, ...sir2];
console.log(combinatie);
const combinatie2=sir1.concat(sir2);
console.log(combinatie2)

//ex 4.11 
const arr2= [[1, 5], [7, 9]];
console.log(arr2[0][1])

//ex 4.12
function elimina_duplicatele(arr){
  return arr.reduce((acc, el)=>{
    if(!acc.includes(el)){
      acc.push(el);
    }
    return acc;
  }, [])
}
console.log(elimina_duplicatele([1, 2,3, 3, 2, 5, 1, 3]))


//ex 4.13 
const arr3=['septembrie', 'octombrie', 'noiembrie', 'decembrie', 'ianuarie', 'februarie'];
const subarr1=arr3.slice(2, 4);
console.log(subarr1);
console.log(arr3.splice(2, 1))
console.log(arr3)

//ex 8.2
import {adunare, scadere } from './mathUtils.js';
console.log("Adunarea este: ", adunare(5, 6));
console.log("Scaderea este: ", scadere(7, 2));

//ex 8.4
import mesaj_salut from './salutari.js';
mesaj_salut('Maria');

//ex 8.6
import *  as utilizatorul from './dateUtilizator.js';
console.log(utilizatorul.numeUt);
console.log(utilizatorul.utilizator);
console.log(utilizatorul.date_utilizator())

