// 1.2

function myFunction(x) {
  if (typeof x === "number") {
    console.log("x is a number");
  }
  if (typeof x === "string") {
    console.log("x is a string");
  }
}

myFunction(12);
myFunction("Hello");
