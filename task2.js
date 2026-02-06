// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.

function f1(a, b) {
    return a + b
}

// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.

const f2 = (width, height = 1) => width * height

// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.

const square = function (num) {
    return num * num
}

// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.

const f3 = (str) => {
    return str.toUpperCase().length
}

// 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. 
// Returnați rezultatele ambelor într-un obiect.

const double = (num) => num * 2

const leadFunction = (num) => {
    return {
        doubledNumber: double(num),
        squaredNumber: square(num)
    }
}

console.log(leadFunction(10))

// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.

const f1 = (a, b) => a + b


// 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 

const arr = [1, 2, 3, 4, 5]

const doubleEach = (a, func) => {
    return a.map(func)
}

console.log(doubleEach(arr, double))