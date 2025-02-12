// 1.3

const integer = "123";
const parsedInteger = parseInt(integer);
console.log(parsedInteger);

const str = 456;
const strConverted = str.toString();
console.log(strConverted);

// 1.4

const nume = "Arina";
const varsta = 20;

console.log(`Eu am o sora geamana care o cheama ${nume} si are ${varsta} ani.`);

// 1.5
let studenta = "Alexandra";

studenta = "Luciana";

console.log(studenta);

// 1.6
let z;

function checkNullOrUndefined(z) {
  if (z === null) {
    console.log("Null");
  } else if (z === undefined) {
    console.log("Undefined");
  }
}

checkNullOrUndefined(z);

// 1.7

const obj = {
  nume: "Daniela",
  varsta: 20,
  studenta: true,
  adresa: {
    strada: "Milano",
    oras: "Italia",
    blocul: 2,
  },
};

obj.facultate = "Drept";
obj.email = "dana@gmail.com";
delete obj.adresa.blocul;

console.log(obj);

// 1.8

const array = ["Mar", false, "Hello World!", 3.14, null, undefined];
array.forEach((element) => console.log(typeof element));
