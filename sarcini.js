// Variabile și Tipuri de date
console.log("Sarcinile de la punctul 1")
//1.1
let x = 100;
var y = "123";
const z = true;
//1.2
function printType(variabila){
    return console.log(typeof variabila);
}
printType(x);
printType(y);
printType(z);
//1.3
function convert(x){
    if(typeof x === 'number'){
        return String(x);
    }else if(typeof x === 'string' ){
        return Number(x);
    }
}
console.log(convert(x),  typeof x);
console.log(convert(y), typeof y);
//1.4
let nume =  "Maria";
let varsta = 25;
console.log(`${nume} are ${varsta} ani`);
//1.5
function switchValue(x,y){
    let temp = y;
    y = x;
    x = temp;
    return [x,y];
}
console.log(switchValue(10, true));
console.log(switchValue(20, false));
//1.6
function controlNullorUndefind(x){
    if(x === null || x === undefined){
        return 'Variabila e null sau undefined';
    }else {
        return x;
    }
}
console.log(controlNullorUndefind(100));
console.log(controlNullorUndefind(null));
//1.7
let cat = {
    name: "Ghena",
    age: 7,
    weight: 4
}
console.log(cat);
cat.age = 8;
cat.weight = 3.5;
console.log(cat);
//1.8
let arr = [1,"Ion",true,0.4];
for(let i of arr){
    console.log(typeof i, i);
}

//Funcții
console.log("Sarcinile de la punctul 2")
// 2.1
const sum=(a,b)=>a+b;
console.log(sum(10,20));
//2.2
function ariaDreptunghi(x, y=1){
    return x*y;
}
console.log(ariaDreptunghi(20,30));
//2.3
const patratUnuiNumar=function(x){return x*x};
console.log(patratUnuiNumar(4));
//2.4
function editText(text){
    text = text.toUpperCase();
    console.log(text);
    return text.length;
}
console.log(editText("Alexandru"));
//2.5
function mainNumber(x){
    return {
        dublu: sum(x,x),
        patrat: patratUnuiNumar(x)
    }
}
console.log(mainNumber(5));
//2.6
console.log(sum(100,400));
//2.7
let numbers = [1,2,3,4,5,6,7,8]
function plusOne(a){
    for(let i=0; i< a.length;i++){
        a[i]+=1;
    }
    return a;
}
console.log(plusOne(numbers));

//Obiecte
console.log("Sarcinile de la punctul 3")
//3.1
let masina ={
    model: 'Dacia',
    marca: 'Logan',
    an: 2022
}
//3.2
console.log(masina.model);
console.log(masina['marca']);
console.log(masina['an']);
//3.3
masina.culoare = 'violet';
masina.an = 2021;
console.log(masina);
//3.4
delete masina.model
console.log(masina);
//3.5
for(let key in masina){
    console.log(key+" : "+masina[key]);
}
//3.6
masina.info = `marca: ${masina.marca}, an: ${masina.an}, culoare: ${masina.culoare}`;
console.log(masina.info);
//3.7
function printPerson(obj){
    return console.log(`${obj.nume} are ${obj.varsta} de ani`);
}
printPerson({nume:"Petrica",varsta:26})
//3.8
if('culoare' in masina){
    console.log("Masina are culoare !");
}
//3.9
let casa = {
    etaje: 3,
    adresa:{
        strada: "Armeneasca",
        oras: 'Chisinau'
    }
}
console.log(casa);
//3.10
function createStudent(nume,varsta,nota){
    let newStudent={
        nume: nume,
        varsta:varsta,
        nota:nota
    }
    return newStudent;
}
console.log(createStudent("Marinela",21,9));
//3.11
let masina1 = Object.assign({}, masina);
let masina2 = { ...masina };
console.log(masina1);
console.log(masina2);
//3.12
let calculator = {
    adunare : (a,b)=>a+b,
    scadere : (a,b)=>a-b,
    inmultire : (a,b)=>a*b,
    impartire : (a,b)=>a/b,
}
console.log(calculator.adunare(2,4));
console.log(calculator.scadere(3,5));
console.log(calculator.inmultire(5,5));
console.log(calculator.impartire(5,5));
//3.13
let {name, age} = cat;
console.log(name);
console.log(age);

//Array-uri
console.log("Sarcinile de la punctul 4")
// 4.1
let city = ["Berlin","Tokyo","Chisinau"];
console.log(city[0]);
console.log(city[city.length-1]);
//4.2
city.push("Cluj-Napoca");
city.unshift("Paris");
console.log(city);
//4.3
let colors = ["red","blue","green","yellow","brown","violet"];
for(let color of colors){
    console.log(color);
}
//4.4
let animals = ["cat","dog","rabbit","horse","mouse"];
animals.forEach(value => console.log(`I love my ${value}`));
//4.5
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function printNum(arr){
    for(let i of arr){
        if(arr[i]>10){
            console.log(arr[i]);
        }
    }
}
printNum(num);
//4.6
let num2 = [1,29,10,18,19,5,6,3,4,11,12,13,14,15,16,17,7,8,20];
num2.sort((a,b) => a-b);
console.log(num2);
//4.7
let num3 = [1,2,3,4,5,6];
function numbersFunction(x){
    return x.map(y => y*y);
}
console.log(numbersFunction(num3));
//4.8
console.log(num3.reduce((a,b)=>a+b,0));
//4.9
console.log(num3.includes(3));
console.log(num3.includes(7));

console.log(num3.indexOf(8) !== -1);
console.log(num3.indexOf(3) !== -1);
//4.10
let cuvinte1 = ["mama","mere","masa","medic",'mama']
let cuvinte2 = ["tata","tractor","tableta","taxi"];
let arrConcat = cuvinte1.concat(cuvinte2);
console.log(arrConcat);
let arrSpread = [...cuvinte1, ...cuvinte2];
console.log(arrSpread);
//4.11
let matrice = [[1,2,3,4],[5,6,7,8]];
console.log(matrice[0][1]);
//4.12
function eliminareaDublicatelor(arr){
    return [...new Set(arr)]
}
console.log(eliminareaDublicatelor(cuvinte1));
//4.13
console.log(cuvinte1.slice(1,3));
console.log(cuvinte2.splice(0,2));

//DOM
console.log("Sarcinile de la punctul 5")
//5.1
document.getElementById('text').textContent = "Am facut schimbari";
//5.2
let toateLi = document.querySelectorAll("li");
toateLi.forEach(el => el.style.color = 'violet');
//5.3
let p = document.createElement('p');
p.textContent = 'Ceva text';
document.getElementById('container').appendChild(p);
//5.4
document.getElementById('imagine').src = 'altSrc...';
//5.5
document.getElementById('box').classList.add("clasa-noua");
//5.6
let paragrafSters = document.querySelector('p');
paragrafSters.remove();
//5.7
document.getElementById('button').addEventListener('click', ()=>
    document.getElementById('h2-schimbari').textContent = 'Schimbari'
)
//5.8
document.getElementById("camp-de-text").addEventListener("input", () =>
    document.getElementById("rez").textContent = this.value);
//5.9
document.getElementById('button-afisare').addEventListener('click', ()=> {
    let lista = document.getElementById("lista-de-elemente");
    let primul = lista.firstElementChild.textContent;
    let ultimul = lista.lastElementChild.textContent;
    document.getElementById("rezultat").textContent = `Primul: ${primul}, Ultimul: ${ultimul}`;
})
//5.10
document.getElementById('button1').addEventListener('click', ()=> {
    document.getElementById('container1').classList.toggle("active");
})
//5.11
let table = document.createElement("table");
for (let i=0; i<3; i++) {
    let row=table.insertRow();
    for (let j =0; j<2;j++) {
        let cell=row.insertCell();
        cell.textContent = `Hello`;
    }
}
document.getElementById("table-container").appendChild(table);
//5.12
document.getElementById('button-generator').addEventListener('click', ()=> {
    let HTMLString =`<li>Helloooooo</li>`;
    console.log(HTMLString);
    document.getElementById("lista-magica").insertAdjacentHTML('beforeend',HTMLString);
})

//DOM
console.log("Sarcinile de la punctul 7")
//7.1
setTimeout(() => {
    console.log("Mesaj afișat după 3 secunde.");
}, 3000);
//7.2
let i = 1;
let interval = setInterval(() => {
    console.log(i);
    if (i === 5) clearInterval(interval);
    i++;
}, 1000);
//7.3
function functiaSalut(callback) {
    console.log("Saliuuuuuut!!");
    callback();
}
functiaSalut(() => console.log("Iata si callback"));
//7.4
function vseoItiPromit() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Vezi! in 2 sec am facut promisiunea");
        }, 2000);
    });
}
vseoItiPromit().then(console.log);
//7.5
function testDacaFacePromisiunea(rezultat) {
    return new Promise((rezolvat, greseala) => {
        setTimeout(() => {
            if (rezultat) {
                rezolvat("Happy! m-am tinut de cuvant");
            } else {
                greseala("Sorry! iata iti promit ca data viitoare va fi bine");
            }
        }, 5000);
    });
}
testDacaFacePromisiunea(true).then(console.log).catch(console.error);
testDacaFacePromisiunea(false).then(console.log).catch(console.error);
//7.6
async function maiPromitemOdata() {
    let rezultat = await vseoItiPromit();
    console.log(rezultat);
}
maiPromitemOdata();
//7.7
function promisiune1() {
    return new Promise(resolve => setTimeout(() => resolve("1 complet!"), 1000));
}
function promisiune2() {
    return new Promise(resolve => setTimeout(() => resolve("2 complet!"), 2000));
}
function promisiune3() {
    return new Promise(resolve => setTimeout(() => resolve("3 complet!"), 3000));
}

promisiune1().then(result => {
    console.log(result);
    return promisiune2();}).then(result => {
    console.log(result);
    return promisiune3();}).then(console.log);
//7.8
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log("Date preluate:", data);
    } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
    }
}
fetchData();
//7.9
let p1 = new Promise(resolve => setTimeout(() => resolve("Promisiunea 1 rezolvată"), 1000));
let p2 = new Promise((resolve, reject) => setTimeout(() => reject("Promisiunea 2 respinsă"), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Promisiunea 3 rezolvată"), 3000));

Promise.all([p1, p3]).then(console.log).catch(console.error);
Promise.allSettled([p1, p2, p3]).then(console.log);

