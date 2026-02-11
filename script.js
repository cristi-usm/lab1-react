// 1.1
var a = 3;
let b ="mama";
const f = false;
//1,2
function unuDoi(g){
return typeof g;
};
console.log(unuDoi("mama"));
//1.3
let num = 123;
let str = "123";
console.log(String(num),Number(str));
//1.4
let nume = "mihaela";
let virsta = 20;
console.log(`ma numesc ${nume} si am ${virsta}`);
//1.5
 let d = 3;
 let j= 6;
 let temp =j;
 j=d;
d = temp
console.log ( d , j);
//1.6
function verificareVar(variabila){
if (variabila == null){
    console.log("este null");
}else if (variabila == undefined){
    console.log("variabila este undefined")
}else{
    console.log("nu este nici de un tip specificat")
}
}
verificareVar(null)
//1.7
let obiect ={
    nume: "mihaela",
    virsta: 20,
    casatorit: false,
}
console.log(obiect);
//1.8
let array=["mama",1,false,null,undefined];
array.forEach(element => {
    console.log(typeof element);
});
//2.1
function sum(a,b){
    return a+b;
};
console.log(sum(3,5));
//2.2
function AriaDrept(l,h=1){
    return (h*l);
}
console.log(AriaDrept(6));
//2.3
let numarPar= function(a){
    return a * a;
}
console.log(numarPar(4));
//2.4
function primesteString (a="mama"){
    let litereMari=a.toUpperCase();
     console.log(litereMari);
     console.log(a.length);
}
 primesteString();
 //2.5
 function dubluNr(a = 4){
return a*2;
 };
 function patratulNr(a=2){
    return a*a;
 }
function primestefunctii(a){
return {
dublu: dubluNr(a),
patrat: patratulNr(a)
};
}
//2,6
console.log (primestefunctii(3));
let suma=(a=4,b=3)=>{
return a+b;
};
console.log(suma());
//2,7
let array2 = [7,3,1,5,6,5,1,11,15];
function doiSapte(...array2){
    return array2.sort((a,b)=>{a-b});
};
console.log(doiSapte(array2));
//3.1
let masina= {
    marca: "opel" ,
    model: "g18",
    an: 2012, 
    //3.6
    descriere: function(){
        return `masina este un ${this.marca} de model ${this.model} din anul ${this.an}`;
    }
};
console.log(masina.descriere());
console.log(masina);
//3.2
console.log (masina.marca,masina["model"]);
//3.3
masina.culoare="alb";
masina.an = 2024;
console.log(masina);
//3.4
delete masina.model;
console.log(masina);
//3.5
for(let cheie in masina){
    console.log(cheie ,masina[cheie]);
}
//3.8
if( "culoare "in masina ){
    console.log ("este proprietatea culoare")
}
//3.9
let casa ={
    adresa: {
strada: "alba iulia 8/2",
oras: "chisinau"
    }
}
//3.10
function studentId(nume ,virsta ,nota){
    return {
        nume: nume,
        virsta : virsta,
        nota: nota
    };
}
console.log(studentId("marin",20,10));
//3.11
let masinaClone1=Object.assign({},masina);
let masinaClone2= {...masina};
console.log( masinaClone1,masinaClone2);
//3.12
let calculator = {
    adunare: function (a,b){return a+b},
    scadere: function (a,b){return a-b},
    inmultire: function(a,b){return a*b},
    inpartire: function(a,b){return a/b}
}
console.log(calculator.adunare(2,4));
//3.13
let{marca,an}= masina; 
console.log (marca);
//4.1
let array1=["chisinau ","madrid","balti"]
console.log (array1[0],array1[2]);
//4.2
array1.push("barselona");
array1.unshift("riscani")
array1.pop();
console.log(array1);
//4.3
let arrayCulori=["alb","galbena","rosu","albastru"];
for (let i=0;i < arrayCulori.length;i++){
console.log(arrayCulori[i]);
}
//4.4
let arrayAnimale=["cai","purcei","gaini"];
arrayAnimale.forEach(function(animal){
    console.log(animal);
});
//4.5
console.log(array2.filter((n)=>{return n>10}));
//4.6
console.log(array2.sort((a,b)=>{return a-b}));
//4.7
console.log(array2.map(n=>n*n));
//4.8
let sumaCuReduce = array2.reduce((acc,currVal)=>{return acc+currVal},0)
console.log(sumaCuReduce);
//4.9
console.log(arrayAnimale.includes("capra"));
console.log (arrayAnimale.indexOf("cai"));
//4.10
let arrayUnit = arrayAnimale.concat(arrayCulori);
console.log(arrayUnit);
//4.11
let matrice = [
[1,2],
[9,5]];
console.log(matrice[0][1]);
//4.12
let arrNoDublicat = [...new Set (array2)];
console.log( arrNoDublicat);
//4.13
 let Item4_13 = arrayUnit.slice(0,4);
 let elementScos = Item4_13.splice(2,1);
console.log(Item4_13);
console.log (elementScos);
//5.1
const  h1 = document.getElementById("h1");
console.log(h1);
h1.innerText ="tata taie lemne";
//5.2
const li = document.querySelectorAll('li');
for(const e of li){
    e.style.color="blue"
}
//5.3 in html
//5.4
function schimbaClasa(){
    const element= document.getElementById("ziua");
    element.classList.add("h4")
    element.innerText = "clasa a fost schimbata si itemul 5.7 rezolvat "}
//5.6
function stergeP(){
const paragraf= document.getElementById("paragraf");
paragraf.remove();
}
//5.8
const input = document.getElementById("TextCamp");
 const afisare = document.getElementById("afisare");
input.addEventListener("input",function(event){
    const text = event.target.value;
    afisare.textContent = text || "(nimic)";
})
//5.9
function afiseazaCopiii() {
    const lista = document.getElementById("lista");
    const copii = lista.children;
            const primul = copii[0];
            const ultimul = copii[copii.length-1];
            const rezultat = document.getElementById("rezultat");
            rezultat.innerHTML = `
                <p><strong>Primul copil:</strong> ${primul.textContent}</p>
                <p><strong>Ultimul copil:</strong> ${ultimul.textContent}</p>`
        }
//5.10
function toggleActive() {
    document.getElementById("element").classList.toggle("active");
}
//5.11
function creazaTabel() {
    let tabel = "<table border='1'>";
    for (let i = 1; i <= 3; i++) {
        tabel += "<tr>";
        for (let j = 1; j <= 2; j++) {
            tabel += `<td>Rând ${i}, Col ${j}</td>`;
        }
        tabel += "</tr>";
    }
    tabel += "</table>";
    document.getElementById("container").innerHTML = tabel;
}//5.12
function adauga() {
    const text = document.getElementById("textNou").value;
    if (text === "") return;
    
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("listaMea").appendChild(li);
    document.getElementById("textNou").value = "";
}//6.1
setTimeout(() => console.log("Au trecut 3 secunde!"), 3000);
//6.2
let numar = 1;
const timer = setInterval(() => {
    console.log(numar);
    numar++;
    if (numar > 5) clearInterval(timer);
}, 1000);
//6.3
function salut(callback) {
    console.log("Salut!");
    callback();
}
//6.4
salut(() => console.log("Callback executat!"));
function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Gata!"), 2000);
    });
}

promisiune().then(console.log);
//6.5
function verificaNumar(numar) {
    return new Promise((resolve, reject) => {
        if (numar > 0) {
            resolve("Număr pozitiv");
        } else {
            reject("Număr negativ sau zero");
        }
    });
}

verificaNumar(5).then(console.log).catch(console.error);
verificaNumar(-2).then(console.log).catch(console.error);
//6.6
async function ruleaza() {
    const rezultat = await promisiune();
    console.log(rezultat);
}

ruleaza();
//6.7
function primul() {
    return new Promise(resolve => setTimeout(() => {
        console.log("1. Primul");
        resolve(1);
    }, 1000));
}

function alDoilea(data) {
    return new Promise(resolve => setTimeout(() => {
        console.log("2. Al doilea, primit:", data);
        resolve(data + 1);
    }, 1000));
}

function alTreilea(data) {
    return new Promise(resolve => setTimeout(() => {
        console.log("3. Al treilea, primit:", data);
        resolve("Gata!");
    }, 1000));
}

primul()
    .then(alDoilea)
    .then(alTreilea)
    .then(console.log);
//6.8
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));
//6.9
const p1 = Promise.resolve("Unu");
const p2 = new Promise(resolve => setTimeout(() => resolve("Doi"), 1000));
const p3 = Promise.resolve("Trei");
const p4 = Promise.reject("Eroare!");

Promise.all([p1, p2, p3])
    .then(console.log)
    .catch(console.error);

Promise.allSettled([p1, p2, p4])
    .then(console.log);