import { adunare, scadere } from "./mathUtils.js";
import salutPersonalizat from "./salutari.js";
import * as utilizator from "./dateUtilizator.js";
// 1.1
var age = 20; 
let name = "Greg"; 
const isStudent = true; 

// 1.2
console.log("1.2")
function varType(a) {
  return typeof a;
}
console.log(varType(age))

// 1.3
console.log("\n1.3")
function conversion(b) {
  if (typeof b === "string") {
    return Number(b);
  } else if (typeof b === "number") {
    return b.toString();
  }
}
console.log(age, typeof(age));
let newAge = conversion(age)
console.log(newAge, typeof(newAge))

// 1.4
console.log("\n1.4")
function sentence(name, age) {
  return `My name is ${name}, and I'm ${age} years old!`;
}
console.log(sentence(name, age))

// 1.5 
console.log("\n1.5")
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return { a, b };
}
let a = 5;
let b = 7;
console.log(swap(a, b))
// 1.6
console.log("\n1.6")
function isNullOrUndefined(value) {
    if(value === null) {
        console.log(`Value is null!`);
    } else if(value === undefined) {
        console.log(`Value is undefined!`);
    }
}
let q = null;
let z;
isNullOrUndefined(q)
isNullOrUndefined(z)

// 1.7 
console.log("\n1.7")
let person = {
  name: "Greg",
  age: 20,
  isStudent: true,
};

person.city = "Cluj";
console.log(person)
delete person.isStudent;
console.log(person)

// 1.8
console.log("\n1.8")
let mixedArray = [10, "text", true, null, { a: 1 }, [1, 2, 3]];

function showTypesOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "=>", typeof arr[i]);
  }
}

showTypesOfArray(mixedArray)

// 2.1 
console.log("\n2.1")
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 8))

// 2.2 
console.log("\n2.2")
function rectangleArea(width, height = 1) {
  return width * height;
}

console.log(rectangleArea(3, 5))

// 2.3
console.log("\n2.3")
let square = (x) => {
  return x * x;
};

console.log(square(4))

// 2.4
console.log("\n2.4")
let upper;
function upperLength(str) {
  upper = str.toUpperCase();
  return upper.length;
}

console.log(upperLength("salut"), upper)

// 2.5
console.log("\n2.5")
function doubleNumber(n) {
  return n * 2;
}

function squareNumber(n) {
  return n * n;
}

function mainDoubleAndSquare(n) {
  return {
    double: doubleNumber(n),
    square: squareNumber(n),
  };
}
console.log(mainDoubleAndSquare(10))

// 2.6
console.log("\n2.6")
let sumArrow = (a, b) => a + b;
console.log(sumArrow(5, 18))

// 2.7
console.log("\n2.7")
function applyToArray(arr, double) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(double(arr[i]));
  }
  return result;
}
function double(n) {
    return n = n * 2
}
console.log(applyToArray([2,3,4,5], double))

// ===========================
// 3. Obiecte
// ===========================

// 3.1
let masina = {
  marca: "Dacia",
  model: "Logan",
  an: 2010,
};

// 3.2 
console.log("\n3.2")
console.log(masina.marca, masina.model);
console.log(masina["marca"], masina["model"]);

// 3.3
masina.culoare = "rosu";
masina.an = 2020;

// 3.4
delete masina.model;

// 3.5
console.log("\n3.5")
function showObject(obj) {
  for (let key in obj) {
    console.log(key + ":", obj[key]);
  }
}
showObject(masina)

// 3.6
console.log("\n3.6")
masina.descriere = function () {
  return `Masina ${this.marca}, an ${this.an}, culoare ${this.culoare}`;
};
console.log(masina.descriere())

// 3.7
console.log("\n3.7")
function mesajPersoana(persoana) {
  return `Ma numesc ${persoana.nume} si am ${persoana.varsta} ani.`;
}
let persoana = {
    nume: "Greg",
    varsta: 20
}
console.log(mesajPersoana(persoana))

// 3.8
console.log("\n3.8")
function hasCuloareCar(car) {
  return "culoare" in car;
}
console.log(hasCuloareCar(masina))

// 3.9
let casa = {
  adresa: {
    strada: "Strada Mare",
    oras: "Bucuresti",
  },
};

// 3.10
console.log("\n3.10")
function createStudent(nume, varsta, nota) {
  return {
    nume: nume,
    varsta: varsta,
    nota: nota,
  };
}
console.log(createStudent("Greg", 20, 10))

// 3.11
let masinaClona1 = Object.assign({}, masina);
let masinaClona2 = { ...masina };

// 3.12
console.log("\n3.12")
let calculator = {
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
    return a / b;
  },
};
console.log(calculator.adunare(12, 8))
// 3.13
console.log("\n3.13")
let { marca, an, culoare } = masina;
console.log(marca)

// 4.1
console.log("\n4.1")
let cities = ["London", "Paris", "Rome"];
console.log(cities[0], cities[cities.length - 1]);

// 4.2
console.log("\n4.2")
cities.push("Berlin");
cities.unshift("Madrid");
cities.pop();
console.log(cities);

// 4.3
console.log("\n4.3")
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// 4.4
console.log("\n4.4")
let animals = ["cat", "dog", "elephant"];
animals.forEach(function(animal) {
    console.log("Animal:", animal);
});

// 4.5
console.log("\n4.5")
function filterGreaterThan10(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) result.push(arr[i]);
    }
    return result;
}
console.log(filterGreaterThan10([5, 12, 3, 20, 8]));

// 4.6
console.log("\n4.6")
let numbers = [12, 5, 8, 1, 20];
numbers.sort(function(a, b) { return a - b; });
console.log(numbers);

// 4.7
console.log("\n4.7")
let nums = [2, 3, 4];
let squares = nums.map(function(n) { return n * n; });
console.log(squares);

// 4.8
console.log("\n4.8")
let sumArr = [1, 2, 3, 4, 5];
let suma = sumArr.reduce(function(acc, curr) { return acc + curr; }, 0);
console.log(suma);

// 4.9
console.log("\n4.9")
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("banana"));

// 4.10
console.log("\n4.10")
let arr1 = ["Hello", "World"];
let arr2 = ["JS", "Coding"];
let combined = arr1.concat(arr2);
console.log(combined);
let combined2 = [...arr1, ...arr2];
console.log(combined2);

// 4.11
console.log("\n4.11")
let matrix = [
    [1, 2],
    [3, 4]
];
console.log(matrix[0][1]);

// 4.12
console.log("\n4.12")
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 4.13
console.log("\n4.13")
let arrSample = [10, 20, 30, 40, 50];
let subArray = arrSample.slice(1, 4);
console.log(subArray);
arrSample.splice(2, 1);
console.log(arrSample);

// 5.1
console.log("\n5.1")
//document.getElementById("myH1").textContent = "Text nou";

// 5.2
console.log("\n5.2")
//document.querySelectorAll("li").forEach(li => li.style.color = "blue");

// 5.3
console.log("\n5.3")
//let p = document.createElement("p");
//p.textContent = "Acesta este un paragraf";
//document.getElementById("container").appendChild(p);

// 5.4
console.log("\n5.4")
//document.querySelector("img").src = "new-image.jpg";

// 5.5
console.log("\n5.5")
//document.getElementById("box").classList.add("newClass");

// 5.6
console.log("\n5.6")
// let pToRemove = document.querySelector("p");
// if (pToRemove) pToRemove.remove();

// 5.7
console.log("\n5.7")
// document.getElementById("myButton").addEventListener("click", function() {
//     document.querySelector("h2").textContent = "Text schimbat";
// });

// 5.8
console.log("\n5.8")
// document.getElementById("textInput").addEventListener("input", function() {
//     document.getElementById("output").textContent = this.value;
// });

// 5.9
console.log("\n5.9")
// let ul = document.querySelector("ul");
// console.log(ul.firstElementChild.textContent, ul.lastElementChild.textContent);

// 5.10
console.log("\n5.10")
// document.getElementById("toggleButton").addEventListener("click", function() {
//     document.getElementById("myElement").classList.toggle("active");
// });

// 5.11
console.log("\n5.11")
// let table = document.createElement("table");
// for (let i = 0; i < 3; i++) {
//     let row = table.insertRow();
//     for (let j = 0; j < 2; j++) {
//         let cell = row.insertCell();
//         cell.textContent = `R${i+1}C${j+1}`;
//     }
// }
// document.body.appendChild(table);

// 5.12
// console.log("\n5.12")
// document.getElementById("addItemButton").addEventListener("click", function() {
//     let li = document.createElement("li");
//     li.textContent = "Item nou";
//     document.querySelector("ul").appendChild(li);
// });

// 6.1
console.log("\n6.1")
setTimeout(function() {
    console.log("Mesaj după 3 secunde");
}, 3000);

// 6.2
console.log("\n6.2")
let count = 1;
let interval = setInterval(function() {
    console.log(count);
    count++;
    if (count > 5) clearInterval(interval);
}, 1000);

// 6.3
console.log("\n6.3")
function salut(callback) {
    console.log("Salut!");
    callback();
}
salut(function() {
    console.log("Callback apelat");
});

// 6.4
console.log("\n6.4")
function promiseAfter2Sec() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Rezultat după 2 secunde"), 2000);
    });
}
promiseAfter2Sec().then(console.log);

// 6.5
console.log("\n6.5")
function conditionalPromise(value) {
    return new Promise((resolve, reject) => {
        if (value) resolve("Rezolvat");
        else reject("Respins");
    });
}
conditionalPromise(true).then(console.log).catch(console.log);

// 6.6
console.log("\n6.6")
async function asyncCall() {
    let result = await promiseAfter2Sec();
    console.log(result);
}
asyncCall();

// 6.7
console.log("\n6.7")
function p1() { return Promise.resolve("P1"); }
function p2() { return Promise.resolve("P2"); }
function p3() { return Promise.resolve("P3"); }

p1().then(res1 => {
    console.log(res1);
    return p2();
}).then(res2 => {
    console.log(res2);
    return p3();
}).then(res3 => console.log(res3));

// 6.8
console.log("\n6.8")
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data));

// 6.9
console.log("\n6.9")
let pr1 = Promise.resolve(1);
let pr2 = Promise.resolve(2);
let pr3 = Promise.reject("eroare");

Promise.all([pr1, pr2]).then(console.log);
Promise.allSettled([pr1, pr2, pr3]).then(console.log);

// operații matematice
console.log("Suma:", adunare(8, 3));
console.log("Diferența:", scadere(8, 3));

// salut
salutPersonalizat("Andrei");

// date utilizator
console.log("Date utilizator:");
console.log(utilizator.nume);
console.log(utilizator.varsta);
console.log(utilizator.tara);




