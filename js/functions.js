// 2. Funcții
// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function sum(a,b){
    return a + b;
}
console.log("Suma: 134 + 46 = " + sum(134,46)+ "\n");

// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.
function aria(a,b = 1){
    return a*b;
}
console.log("Aria dreptunghiului (unspecified) " + aria(13));
console.log("Aria dreptunghiului (laturi 15 si 9) " + aria(15,9) + "\n");

// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
let anonymSqr = ((a) => { return a ** 2; });
console.log("Patraturl lui 17 este " + anonymSqr(17) + "\n");

// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function toUpper(string){
    return string.toUpperCase().length;
}
console.log("Lungimea lui 'qwertyuiop' este "+ toUpper("qwertyuiop") + "\n");

// 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
function main(a){
    let obj ={
        value: a,
        double: aria(a,2),
        squared: anonymSqr(a)
    };
    return obj;
}
console.log("Obiect unde a = 56 este ");
console.log(main(56));
console.log("\n");

// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
let sum1 = ((a,b) => {return a + b;});
console.log("Suma rescrisa: 156 + 345 = " + sum1(156,345) + "\n");

// 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.
function allElem(arr){
    let arr2 = [];
    arr.forEach((element) => {arr2.push(anonymSqr(element));});
    return arr2;
}
let arr = [2,5,8,7,0];
console.log("Initial array: "+ arr);
console.log("Patratul elementelor: " + allElem(arr));