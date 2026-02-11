var x = 10;
let text = "Hello, World!";
const truthiness = true;
function varType(variabila) {
    return typeof variabila;
}

console.log(varType(x)); // Output: "number"
console.log(varType(text)); // Output: "string"
console.log(varType(truthiness)); // Output: "boolean"