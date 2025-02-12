// 4. Array-uri
// 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
// 4.1
let arrCity = [" Chisinau ", " Bucuresti ", " Budapest "];
console.log("First elem is " + arrCity[0] + " and last elem is " + arrCity.at(arrCity.length - 1) + "\n");

// 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
arrCity.push(" Athens ");
console.log("New array : " + arrCity);
arrCity.unshift(" Milan ");
console.log("New array : " + arrCity);
arrCity.pop();
console.log("New array : " + arrCity);
console.log("\n");

// 4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element.
console.log("Array of colors")
const arrColor = [" blue ", " pink ", " red ", " black "];
for(color in arrColor) {
    console.log(`${arrColor[color]}`);
}
console.log("\n");

// 4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
console.log("Array of animals ")
const arrAnimals = [" cat ", " dog ", " mouse ", " pigeon "];
arrAnimals.forEach((element) => console.log(`This ${element} in an animal`));
console.log("\n");

// 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.
function biggerThanTen(arr){
    let arr2 = [];
    arr.forEach( (element) => { if(element>10){ arr2.push(element);} });
    return arr2;
}
let arrNumbers = [ 2, 4, 11, 5, 45, 7, 89];
console.log("Numere mai mari ca 10 din " + arrNumbers);
console.log(biggerThanTen(arrNumbers));
console.log("\n");

// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
console.log("Arrray sortat " + arrNumbers);
arrNumbers.sort((a,b)=> a-b);
console.log(arrNumbers);
console.log("\n");

// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.
function patrate(arr){
    let roots = arr.map((num) => num**2);
    return roots;
}
console.log("Patratele numerelor " + arrNumbers);
console.log(patrate(arrNumbers));
console.log("\n");

// 4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.
let arrSum = arrNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Suma elem din array este " + arrSum + "\n");

// 4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.
console.log(arrCity.includes(" Vienna "));
console.log(arrCity.includes(" Budapest "));
let index = arrCity.indexOf(" Budapest ");
console.log(`Indexul lui Budapest este ${index}. \n`);

// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).
let arrColAnimal = arrColor.concat(arrAnimals);
console.log('Concat arrays ' + arrColAnimal);
let arrAnimColor = [...arrAnimals, ...arrColor];
console.log('Spread arrays ' + arrAnimColor);
console.log("\n");

// 4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.
const matrix = [[1,2,3,4],[5,6,7,8]];
console.log("Matrix data " + matrix[0][1]);

// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
function noRepeat(arr){
    return [... new Set(arr)];
}
const repeating = [2, 2, 10, 4, 7, 4];
console.log(noRepeat(repeating));
console.log("\n");

// 4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.
const subarray = arrAnimColor.slice(1,5);
arrAnimColor.splice(2,1);
console.log(subarray);
console.log(arrAnimColor);
