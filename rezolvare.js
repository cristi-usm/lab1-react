//1.1
var a = 124;
let b = "mercedes";
const c = true;

//1.2
function varType(a) {
    return typeof(a);
}
console.log("1.2");
console.log(varType(124));

//1.3
let conversion = (b) => {
    if (typeof(b) == "string") {
        return Number(b);
    } else {
        return b.toString();
    }
}
console.log("1.3");
console.log(conversion("124"));

//1.4
let name = "dragosh";
let age = 20;
let template = (name, age) => {
    return `My name is ${name} and I'm ${age} years old`
}
console.log("1.4");
console.log(template(name, age));

//1.5
let value1 = 124;
let value2 = 260;
let swap = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
[value1, value2] = swap(value1, value2);
console.log("1.5");
console.log(value1, value2);

//1.6
let noType = (value) => {
    if (value == null) {
        console.log("Null or Undefined");
    } else {
        console.log(typeof(value));
    }
}
console.log("1.6");
noType(124);

//1.7
console.log("1.7");
let car = {
    brand: "Mercedes",
    model: "260E",
    year: 1989,
};
console.log("Obiect initial: ", car);
car.displacement = 2.6; //adaugam dinamic o proprietate
console.log("Obiect dupa adaugarea unei proprietati: ", car);
delete car.model; //stergem o proprietate
console.log("Obiect dupa stergerea unei proprietati: ", car); 

//1.8
console.log("1.8");
let array = ["Mercedes", 124, 2.6, true, {good: "yes"}]
for (let i = 0; i < array.length; i++) {
    console.log(typeof(array[i]))
}

//2.1
console.log("2.1");
let sum = (a, b) => {
    return a+b;
}
console.log(sum(2, 6));

//2.2
console.log("2.2");
let rectangleArea = (width, height = 1) => {
    return width * height;
}
console.log(rectangleArea(124));

//2.3
console.log("2.3");
let square = function(number) {
    return number*number;
}
console.log(square(124));

//2.4
console.log("2.4");
let characterCount = (string) => {
    let upper = string.toUpperCase();
    return upper.length;
}
console.log(characterCount("Mercedes"));

//2.5
console.log("2.5");
let double = (number) => {
    return number * 2;
}
let square1 = (number) => {
    return number * number;
}
let mainFunction = (number) => {
    return {
        double: double(number),
        square: square1(number)
    };
}
console.log(mainFunction(3));

//2.6
console.log("2.6");
let sum1 = (a, b) => {
    return a + b;
}
console.log(sum1(124, 2.6));

//2.7
console.log("2.7");
let modify = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = double(array[i]);
    }
    return array;
}
console.log(modify([1, 2, 3, 4, 5]));

//3.1
console.log("3.1");
let masina = {
    marca: "Mercedes",
    model: 260,
    an: 1989
};
console.log(masina);

//3.2
console.log("3.2");
console.log(masina.marca); //afisare cu punct
console.log(masina.model);
console.log(masina.an);
console.log(masina["marca"]); //afisare cu paranteze patrate
console.log(masina["model"]);
console.log(masina["an"]);

//3.3
console.log("3.3");
masina.culoare = "Nautical Blue";
masina.an = 1984;
console.log(masina);

//3.4
console.log("3.4");
delete masina.model;
console.log(masina);

//3.5
console.log("3.5");
for (let key in masina) {
    console.log(key + ": " + masina[key]);
}

//3.6
console.log("3.6");
masina.description = function() {
    return `Marca: ${this.marca}, An: ${this.an}, Culoare: ${this.culoare}`;
}
console.log(masina.description());

//3.7
console.log("3.7");
let persoana = {
    nume: "dragosh",
    varsta: 20
};
let personDescription = (object) => {
    return `${object.nume} are ${object.varsta} de ani`
}
console.log(personDescription(persoana));

//3.8
console.log("3.8");
let checkKey = (object) => {
    return "culoare" in object;
}
console.log(checkKey(masina));

//3.9
console.log("3.9");
let casa = {
    adresa: {
        oras: "Chisinau",
        strada: "Grenoble", 
        numar: 120
    }
}
console.log(casa);

//3.10
console.log("3.10");
let createStudent = (nume, varsta, nota) => {
    let student = {
        nume: nume,
        varsta: varsta,
        nota: nota
    };
    return student;
}
let student = createStudent("dragosh", 20, 69);
console.log(student);

// 3.11
console.log("3.11");
let masinaClone1 = Object.assign({}, masina);
console.log("Clona 1:", masinaClone1);
let masinaClone2 = { ...masina };
console.log("Clona 2:", masinaClone2);

//3.12
console.log("3.12");
let calculator = {
    adunare: function(a, b) {return a + b},
    scadere: function(a, b) {return a - b},
    inmultire: function(a, b) {return a * b},
    impartire: function(a, b) {return a / b}
}

//3.13
console.log("3.13");
let {marca, an, culoare} = masina;
console.log(marca);
console.log(an);
console.log(culoare);

//4.1
console.log("4.1");
let orase = ["Chisinau", "Balti", "Comrat"];
console.log(orase.shift());
console.log(orase.pop());

//4.2
console.log("4.2");
orase.unshift("Tiraspol");
orase.push("Cahul");
orase.pop();
console.log(orase);

//4.3
console.log("4.3");
let culori = ["albastru", "verde", "rosu", "negru", "alb"];
for (let i = 0; i < culori.length; i++) {
    console.log(culori[i]);
}

//4.4
console.log("4.4");
let animale = ["pisica", "caine", "cal", "papagal"];

animale.forEach(function(animal) {
    console.log("Animalul meu preferat este " + animal);
});

//4.5
console.log("4.5");
let numbers = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
            result.push(array[i]);
        }
    }
    return result;
}
numbers([22, 10, 6, 124]);

//4.6
console.log("4.6");
let numbers1 = [124, 2.6, 1989, 260, 69];
numbers1.sort((a, b) => a - b);
console.log(numbers1);

//4.7
console.log("4.7");
let numbers2 = [1, 2, 3, 4, 5];
let squares = numbers2.map(num => num * num);
console.log(squares);

//4.8
console.log("4.8");
let numbers3 = [1, 2, 3, 4, 5];
let sum2 = numbers3.reduce((acc, val) => {return acc + val}, 0);
console.log(sum2);

//4.9
console.log("4.9");
let numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.includes(4));
console.log(numbers4.indexOf(6));

//4.10
console.log("4.10");
let brands1 = ["Mercedes", "BMW", "Audi"];
let brands2 = ["Volvo", "Toyota", "Honda"];
let combined = brands1.concat(brands2);
console.log(combined);
let combined2 = [...brands1, ...brands2];
console.log(combined2);

//4.11
console.log("4.11");
let matrix = [
    [1, 2],
    [3, 4]
];
let target = matrix[0][1];
console.log(target);

//4.12
console.log("4.12");
let removeDuplicates = (array) => {
    return [...new Set(array)];
};
console.log(removeDuplicates([124, 124, 260, 260, 1989]));

//4.13
console.log("4.13");
let numbers5 = [10, 20, 30, 40, 50];
console.log("Initial: ", numbers5);
let subArray = numbers5.slice(1, 4);
console.log("Slice: ", subArray);
numbers5.splice(2, 1);
console.log("Splice: ", numbers5);

//5.1
console.log("5.1");
const h1 = document.getElementById("5.1");
h1.textContent = "text schimbat";

//5.2
console.log("5.2");
const liElements = document.querySelectorAll("li");
liElements.forEach(li => {
    li.style.color = "blue";
});

//5.3
console.log("5.3");
const container = document.getElementById("container");
const p = document.createElement("p");
p.innerText = "element creat";
container.appendChild(p);

//5.4
console.log("5.4");
const image = document.getElementById("image");
image.src = "rear.jpg";

//5.5
console.log("5.5");
const box = document.getElementById("box");
box.classList.add("newClass");

//5.6
console.log("5.6");
const remove = document.getElementById("remove");
remove.remove();

//5.7
console.log("5.7");
const button = document.getElementById("button");
const toBeChanged = document.getElementById("5.7");
button.addEventListener("click", () => {
    toBeChanged.innerText = "text schimbat";
});

//5.8
console.log("5.8");
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");
liveInput.addEventListener("input", () => {
      liveOutput.textContent = "output: " + liveInput.value;
});

//5.9
console.log("5.9");
const benzoUl = document.getElementById("benzoUl");
const ulInfo = document.getElementById("ulInfo");
const firstElement = benzoUl.firstElementChild?.textContent;
const lastElement = benzoUl.lastElementChild?.textContent;
ulInfo.textContent = `primul element: ${firstElement} | ultimul element: ${lastElement}`;

//5.10
console.log("5.10");
const classButton = document.getElementById("classButton");
classButton.addEventListener("click", () => {
    box.classList.toggle("active");
});

//5.11
console.log("5.11");
const createTableButton = document.getElementById("createTableButton");
const tableZone = document.getElementById("tableZone");
createTableButton.addEventListener("click", () => {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "10px";

  const tbody = document.createElement("tbody");
  for (let r = 0; r < 3; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < 2; c++) {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableZone.appendChild(table);
});

//5.12
console.log("5.12");
const addLiButton = document.getElementById("addLiButton");
const dynamicList = document.getElementById("dynamicList");
let count = 1;

addLiButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "element nr. " + count;
  dynamicList.appendChild(li);
  count++;
});

//6.1
console.log("6.1")
setTimeout(() => {
    console.log("delay de 3 secunde");
}, 3000);

//6.2
console.log("6.2");
const timer = document.getElementById("timer");
let timerCount = 1;
const interval = setInterval(() => {
    timer.textContent = timerCount;
    timerCount++;

    if (timerCount > 5) {
      clearInterval(interval); 
    }
  }, 1000);

//6.3
console.log("6.3");
function salut(callback) {
    console.log("salut");
    callback();
}
function world() {
    console.log("world");
}
salut(world);

//6.4
console.log("6.4");
function twoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => resolve("delay de 2 secunde"), 2000);
    });
}

async function run() {
    console.log("start");
    const message = await twoSeconds();
    console.log(message);
}

run();

// 6.5
console.log("6.5");

function checkValue(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 0) {
                resolve("valoarea este pozitiva");
            } else {
                reject("valoarea este negativa sau zero");
            }
        }, 1000);
    });
}

checkValue(5)
    .then(result => console.log(result))
    .catch(error => console.log(error));

checkValue(-2)
    .then(result => console.log(result))
    .catch(error => console.log(error));

//6.6
async function start() {
    const result = await salutModul("Dragos");
    console.log(result);
}
start();

// 6.7
console.log("6.7");
function first() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("prima functie");
            resolve(1);
        }, 1000);
    });
}
function second(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("a doua functie");
            resolve(value + 1);
        }, 1000);
    });
}
function third(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("a treia functie");
            resolve(value + 1);
        }, 1000);
    });
}
first()
    .then(result => second(result))
    .then(result => third(result))
    .then(finalResult => {
        console.log("rezultat final:", finalResult);
    });

//6.8
console.log("6.8");
const list = document.getElementById("postsList");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())   
    .then(data => {
    data.slice(0, 5).forEach(post => {  
        const li = document.createElement("li");
        li.textContent = post.title;
        list.appendChild(li);
        });
    })
    .catch(error => {
        console.log("Eroare:", error);
    });

//6.9
console.log("6.9");
function promise1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("promisiunea 1"), 1000);
    });
}
function promise2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("promisiunea 2"), 2000);
    });
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("promisiunea 3 erroare"), 1500);
    });
}

Promise.all([promise1(), promise2()])
    .then(results => {
        console.log("Promise.all: ", results);
    })
    .catch(error => {
        console.log("Promise.all: ", error);
    });

Promise.allSettled([promise1(), promise2(), promise3()])
    .then(results => {
        console.log("Promise.allSettled: ", results);
    });

//7.1/2
console.log("7.1/2");
import { adunare, scadere } from "./mathUtils.js";
console.log(adunare(5, 3)); 
console.log(scadere(5, 3));  

//7.3/4
console.log("7.3/4");
import salutModul from "./salutari.js";
console.log(salutModul("Dragos"));

//7.5/6
console.log("7.5/6");
import * as dateUtilizator from "./dateUtilizator.js";
console.log(dateUtilizator.marca);
console.log(dateUtilizator.an);
console.log(dateUtilizator.culoare);
dateUtilizator.afisareDate();









