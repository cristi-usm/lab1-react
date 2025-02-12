// 2.1

function suma(a, b) {
  return a + b;
}

console.log(suma(10, 6));

// 2.2

function areaOfRectangle(l, L = 1) {
  const a = l * L;
  return a;
}

console.log(areaOfRectangle(4));

// 2.3

let patrat = function (x) {
  const rezultatTotal = x * x;
  return rezultatTotal;
};

console.log(patrat(23));

// 2.4

function uppercaseAndCount(str) {
  return str.toUpperCase().length;
}

console.log(uppercaseAndCount("Hello World"));

// 2.5

function returnObj(x, c) {
  return {
    sumNr: x * 2,
    calcPatrat: c * c,
  };
}

console.log(returnObj(4, 5));

// 2.6

let calcSum = (k, m) => k + m;

console.log(calcSum(2, 5));

// 2.7

function myFunctionArray(arr, fn) {
  return arr.map(fn);
}

const numbers = [8, 16, 22, 6, 31];
const result = myFunctionArray(numbers, (x) => x + 1);

console.log(result);
