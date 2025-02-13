//2.1
function sum(a, b) {
    return a + b;
}
console.log(sum(1,9));

//2.2
function ariaDrept(lungime, inaltime = 1) {
    return lungime * inaltime;
}
console.log(ariaDrept(5));
console.log(ariaDrept(5, 3));

//2.3
const patrat = function(numar) {
    return numar * numar;
};
console.log(patrat(4));

//2.4
function numCar(str) {
    return str.toUpperCase().length;
}
console.log(numCar("Buna"));

//2.5
function calculeaza(num) {
    const dublu = num * 2;
    const patratt = num * num;
    return { dublu, patratt };
}
console.log(calculeaza(3));

//2.6
const sume = (a, b) => a  + b;
console.log(sume(4,6));

//2.7
function aplicaPeArray(arr, func) {
    return arr.map(func);
}
console.log(aplicaPeArray([1, 2, 3], numar => numar * 2)); 
