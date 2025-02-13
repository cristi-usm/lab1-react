import { adunare, scadere } from './mathUtils.js';
import salutari from './salutari.js';
import * as dateUtilizator from './dateUtilizator.js';

//--------------------------- 1 ---------------------------
//1.1
console.log('--------------------------- 1 ---------------------------');
var globalVar = 20;
let stringLet = 'Some text';
const booleanConst = false;

//1.2
function getType(item){
    return typeof(item);
}
console.log(getType(booleanConst));

//1.3
function toString(val) {
    return String(val);
}
function toNumber(val) {
    return Number(val);
}
console.log(toString(globalVar));
console.log(toNumber("123"));

//1.4
const nume = 'Vasile';
const varsta = '32';
console.log(`Nume: ${nume}, varsta: ${varsta}`);

//1.5
let a = 2, b = 3;
let temp = a;
a = b;
b = temp;
console.log(a, b);

//1.6
function checkNull(item){
    if(item === null || item === undefined) console.error(`${item} is ${getType(item)}`);
}
let und;
console.log(checkNull(und));

//1.7  
const chillGuyProfile = {
    name: 'Chill guy',
    age: '12',
    chilling: true
}
chillGuyProfile.popular = true;
console.log(chillGuyProfile);
delete chillGuyProfile.popular;
console.log(chillGuyProfile);
let {chilling, ...chillGuyProfileUpdated} = chillGuyProfile
console.log(chillGuyProfileUpdated);

//1.8
const mixedArray = ['Text', 4.5, true, [4,5], {a:1, b:2}];
const arrayItemstypes = mixedArray.map(item => getType(item));
console.log(arrayItemstypes);

//--------------------------- 2 ---------------------------
//2.1
console.log('--------------------------- 2 ---------------------------');
function sum(a,b){
    return a+b;
}
console.log(sum(12,45));

//2.2
function rectangleAria(width, height){
    return height? width * height : width;
}
console.log(rectangleAria(3,4));

//2.3
const square = (n) => n*n;
console.log(square(3));

//2.4
function stringManagement(text){
    return text.toUpperCase().length;
}
console.log(stringManagement('String management'));

//2.5
const double = (n) => n * 2;

function numberManagement(n){
    return {double: double(n), square: square(n)}
}
console.log(numberManagement(4));

//2.6
const sum2 = (a,b) => a + b;
console.log(sum2(2, 4));

//2.7
function squareArray(arr){
    return arr.map(n => square(n));
}
console.log(squareArray([2,6,3,4]));

//--------------------------- 3 ---------------------------
console.log('--------------------------- 3 ---------------------------');
//3.1
const masina = {
    marca: 'Toyota',
    model: 'Supra MK4',
    an: 1993
};
console.log(masina);

//3.2
// Se foloseste atunci cand numele proprietatii este cunoscut si este un identificator valid (fara spatii, caractere speciale)
console.log(masina.marca, masina.model);
// Se foloseste cand numele proprietatii este dinamic sau nu este un identificator valid
console.log(masina['marca'], masina['model']);

//3.3
masina.culoare = 'alb';
masina.an = 2002;
console.log(masina);

//3.4
delete masina.model;
console.log(masina);

//3.5
for (let rec in masina) console.log(`Key: ${rec}, value: ${masina[rec]}`);

//3.6
masina.descriere = `Masina ${masina.marca} din anul ${masina.an}, de culoare ${masina.culoare}`;
console.log(masina);

//3.7
function checkPersoana(persoana){
    if(!persoana.hasOwnProperty(nume) || !persoana.hasOwnProperty(varsta)){
        console.error('Date invalide');
    }
    return `Persoana are numele ${persoana.nume} si varsta ${persoana.varsta}`;
}
console.log({nume: 'Cristi', varsta: 24});

//3.8
('culoare' in masina) ? console.log("Masina contine proprietatea 'culoare'") : console.log("Masina nu contine proprietatea 'culoare'");

//3.9
const casa = {
    adresa: {strada: 'str. Lomonosov 203', oras: 'Rezina'}
}
console.log(casa);

//3.10
function student(nume, varsta, nota){
    return {nume: nume, varsta: varsta, nota: nota};
}
console.log(student('Damian', '12', 3));

//3.11
const altaMasina = Object.assign({}, masina);
console.log(altaMasina);

const altaMasina2 = {...masina};
console.log(altaMasina2);

//3.12
const calculator = {
    sum: (a, b) => a + b,
    difference : (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
}

console.log(calculator.sum(2,3));
console.log(calculator.difference(2,3));
console.log(calculator.multiply(2,3));
console.log(calculator.division(2,3));

//3.13
const {marca} = masina;
const {culoare, an} = masina;
console.log(marca, culoare, an);

//--------------------------- 4 ---------------------------
console.log('--------------------------- 4 ---------------------------');

//4.1
const orase = ['Briceni', 'Balti', 'Chisinau']
console.log(orase[0], orase[orase.length-1]);

//4.2
orase.unshift('Orhei');
orase.push('Cahul');
console.log(orase);
orase.pop();
console.log(orase);

//4.3
for(let c of ['galben', 'albastru', 'rosu', 'violet']) console.log(c);

//4.4
const animaleCompanie = ['pisica', 'caine', 'hamster', 'raton', 'Damian'];
animaleCompanie.forEach(animal => {
    console.log(`Un animal de companie excelent este ${animal}`);
});

//4.5
const numbers = [1,3,5.3,6,57,65,33,78,234];
function biggerThanTen(numbers){
    const biggerNumbers = [];
    numbers.forEach(number => {if (number > 10) biggerNumbers.push(number);})
    return biggerNumbers;
}
console.log(biggerThanTen(numbers));
console.log(numbers.filter(n => n > 10));

//4.6
const nums = [2,65,37,8,2,48,50];
nums.sort((a,b) => a-b);
console.log(nums);

//4.7
function squareArray2(nums) {
    return nums.map(n => n * n);
}
console.log(squareArray2(nums));

//4.8
const summm = nums.reduce((s, n) => s + n, 0);
console.log(summm);

//4.9
console.log(`Array-ul ${nums}`, nums.includes(37) ? `contine` : `nu contine`, `elementul 37`);;
console.log(`Array-ul ${nums}`, nums.indexOf(69) > 0 ? `contine` : `nu contine`, `elementul 69`);;

//4.10
const wildAnimals = ['bear', 'wolf', 'tiger', 'lion'], 
      domesticAnimals = ['chicken', 'cow', 'scheep', 'horse'];
let mixAnimals = wildAnimals.concat(domesticAnimals);
console.log(mixAnimals);
mixAnimals = [...wildAnimals, ...domesticAnimals];
console.log(mixAnimals);

//4.11
const matrix = [[1,2], [1,2]];
console.log(matrix[0][1]);

//4.12
function clearDuplicates(arr){
    const clearArray = [];
    arr.forEach(item => {
        if(!clearArray.includes(item)) clearArray.push(item);
    })
    return clearArray
}
console.log(clearDuplicates(['hello', 3, 5, 3, 3, 'hello', 'hello']));

function removeDuplicatesWithFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index); // deoarece filter pastreaza doar primul index
}
console.log(removeDuplicatesWithFilter(['hello', 3, 5, 3, 3, 'hello', 'hello']));

//4.13
const toys = ['teddy bear', 'Barbie doll', 'puzzle', 'lego', 'cubic rubik', 'baby doll', 'yo-yo']
const interestingToys = toys.slice(0,4);
console.log(interestingToys);
toys.splice(2, 1);
console.log(toys);


//--------------------------- 5 ---------------------------
console.log('--------------------------- 5 ---------------------------');
//5.1
const title = document.getElementById('title');
title.innerText = 'Estriper Penguin';

//5.2
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.style.color = '#7f7bda';
  });

//5.3
const paragraph = document.createElement('p');
paragraph.textContent = 'Los Pinguinos me la van a Mascar';
const container = document.getElementById('container');
container.appendChild(paragraph);

//5.4
const image = document.getElementById('image');
image.src = 'penguins-superJumbo.jpg'

//5.5
const box = document.getElementById('box');
box.classList.add('new-class');

//5.6
const p = document.getElementById('paragraph');
p.remove();

//5.7
const btn = document.getElementById('changeTextBtn');
const subtitle = document.getElementById('subtitle');
btn.addEventListener('click', () => {
    subtitle.textContent = 'Best Disney Movies';
})

//5.8
const textInput = document.getElementById('textInput');
const displayText = document.getElementById('displayText');
textInput.addEventListener('input', function() {
    displayText.textContent = textInput.value;
  });

//5.9
const list = document.getElementById('list');
const firstChild = list.firstElementChild;
const lastChild = list.lastElementChild;
console.log('Primul copil:', firstChild.textContent);
console.log('Ultimul copil:', lastChild.textContent);

//5.10
const colorButton = document.getElementById('toggleBtn');
const toggleElement = document.getElementById('toggleElement');

colorButton.addEventListener('click', function() {
    toggleElement.classList.toggle('active');
});

//5.11
const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

for (let i = 0; i < 3; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 2; j++) {
        const cell = document.createElement('td');
        cell.textContent = `Rand ${i + 1}, Coloana ${j + 1}`;
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
        row.appendChild(cell);
    }
    table.appendChild(row);
}

const tableContainer = document.getElementById('tableContainer');
tableContainer.appendChild(table);

//5.12
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
addItemBtn.addEventListener('click', function() {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Element nou';
    dynamicList.appendChild(newListItem);
});


//--------------------------- 7 ---------------------------
console.log('--------------------------- 7 ---------------------------');
//7.1
setTimeout(() => {
    console.log("Mesaj afisat dupa 3 secunde!");
}, 3000);

//7.2
let cronometru = 1;
const interval = setInterval(() => {
    console.log(cronometru);
    if (cronometru === 5) {
        clearInterval(interval);
    }
    cronometru++;
}, 1000);

//7.3
function salut(callback) {
    console.log("Salut! Bine ai venit!");
    callback();
}
function mesajFinal() {
    console.log("Acesta este mesajul din callback.");
}
salut(mesajFinal);

//7.4
function iPromiseT_T(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I promise I will stand by your side!");
        }, 2000)
    })
}

iPromiseT_T().then(message => console.log(message));

//7.5
function checkPositive(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(`Numarul ${num} este pozitiv`);
            } else {
                reject(`Numarul ${num} este negativ`);
            }
        }, 2000);
    });
}
checkPositive(8)
    .then(mes => console.log(mes))
    .catch(err => console.error(err));
    checkPositive(-4)
    .then(mes => console.log(mes))
    .catch(err => console.error(err));

//7.6
const dramaticPromise = async() => await iPromiseT_T();
dramaticPromise().then(message => console.log(message));

//7.7
function preincalzireCuptor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let succes = Math.random() > 0.2;
            if (succes) {
                console.log("Cuptorul a fost preincalzit la 180°C.");
                resolve("Cuptor pregatit");
            } else {
                reject("Cuptorul nu s-a aprins! Verifica gazul sau curentul.");
            }
        }, 1000);
    });
}

function coacerePrajitura(statusCuptor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let succes = Math.random() > 0.3;
            if (succes) {
                console.log(`Prajitura este in cuptor. (${statusCuptor})`);
                resolve("Prajitura coapta");
            } else {
                reject("Prajitura s-a ars! Ai lasat-o prea mult in cuptor.");
            }
        }, 2000);
    });
}

function servirePrajitura(statusPrajitura) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let succes = Math.random() > 0.1;
            if (succes) {
                console.log(`Prajitura este gata de servire! (${statusPrajitura})`);
                resolve("Delicioasa!");
            } else {
                reject("Cineva a scapat prajitura pe jos!");
            }
        }, 1500);
    });
}
preincalzireCuptor()
    .then(rezultat1 => coacerePrajitura(rezultat1))
    .then(rezultat2 => servirePrajitura(rezultat2))
    .then(rezultatFinal => console.log("Toata lumea poate savura prajitura!", rezultatFinal))
    .catch(eroare => console.error("A aparut o problema:", eroare));

//7.8
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

//7.9
//esueaza daca o singura promisiune este respinsa
Promise.all([preincalzireCuptor(), coacerePrajitura("Cuptor pregatit"), servirePrajitura("Prajitura coapta")])
    .then(rezultate => {
        console.log("Toate etapele au reușit:", rezultate);
    })
    .catch(eroare => {
        console.error("A apărut o problemă:", eroare);
    });


//returnează rezultatele tuturor promisiunilor, indiferent de succes sau eșec
Promise.allSettled([preincalzireCuptor(), coacerePrajitura("Cuptor pregatit"), servirePrajitura("Prajitura coapta")])
    .then(rezultate => {
        console.log("\nRezultatele tuturor promisiunilor:");
        rezultate.forEach((rezultat, index) => {
            console.log(`Promisiunea ${index + 1}:`, rezultat);
        });
    });


//--------------------------- 8 ---------------------------
console.log('--------------------------- 8 ---------------------------');
//8.2
console.log(adunare(2,4))
console.log(scadere(5,3))

//8.4
salutari('Cristi');

//8.6
console.log(dateUtilizator.nume);
console.log(dateUtilizator.varsta);
console.log(dateUtilizator.email);
dateUtilizator.afiseazaUtilizator();
