// ## 1. Variabile și Tipuri de date
// ### 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. Atribuiți-le valori de tip *number*, *string* și *boolean*.
var test1 = 12
let test2 = '123'
const test3 = true

// ### 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.
function getType(value) {
    return typeof value
}

// ### 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".
Number(test2)
test1.toString()

// ### 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).
const nume = "test"
const varsta = 12
const message = `Numele meu este ${nume} și am ${varsta} ani.`

// ### 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
let a = 5
let b = 10
let temp = a
a = b
b = temp

// ### 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.
function isNullOrUndefined(value) {
    return value === null || value === undefined
}

// ### 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.
const obj = {
    a: 'test',
    b: 123,
    c: true
}
obj.a = 'dsa'
delete obj.a

// ### 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
const arr = [123, true, undefined, 'string', null]
arr.forEach(a => console.log(getType(a)))

// ## 2. Funcții
// ### 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function sum(a,b) {
    return a + b
}

// ### 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.
function aria(l, h = 1) {
    if(l <=0 || h <= 0) return 0
    return l * h
}

// ### 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
const patrat = function(a) {
    return a*a
}

// ### 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function stringLength(str) {
    return str.toUpperCase().length
}

// ### 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
function dublu(a) {
    return a+a
}
function princ(a) {
    return {
        dublu: dublu(a),
        patrat: patrat(a),
    }
}

// ### 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
sum = (a, b) => a + b
 
// ### 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 
function afisare(el) {
    console.log(el)
}
function aplica(arr, func) {
    arr.forEach(a => func(a))
}
aplica([1,2,3], afisare)

// ## 3. Obiecte
// ### 3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
const masina = {
    marca: 'test',
    model: 'idk',
    an: 123,
}

// ### 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
console.log(masina.marca)
console.log(masina['model'])

// ### 3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
masina.an = 1234
masina.culoare = 'red'

// ### 3.4 Ștergeți proprietatea model din obiect.
delete masina.model

// ### 3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
for(const key in masina) {
    console.log(`${key}: ${masina[key]}`)
}

// ### 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.
masina.descriere = function() {
    let res = ''
    for(const key in masina) {
        res += `${key}: ${masina[key]}\n`
    }
    return res
}

// ### 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
function test(persoana) {
    return `Salut ${persoana.nume} cu varsta ${persoana.varsta}`
}

// ### 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
console.log('culoare' in masina)

// ### 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.
const casa = {
    adresa: {
        strada: 'test',
        oras: 'testing',
    }
}

// ### 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu proprietățile **nume**, **varsta** și **nota**.
function createStudent(nume, varsta, nota) {
    return { nume, varsta, nota }
}

// ### 3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
const masina2 = Object.assign({ test: 'haha' }, masina)
const masina3 = { ...masina }

// ### 3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
const calculator = {
    adunare: (a, b) => a + b,
    scadere: (a, b) => a - b,
    inmultire: (a, b) => a * b,
    impartire: (a, b) => a / b,
}

// ### 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
const { culoare, an } = masina

// ## 4. Array-uri
// ### 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
const city = ['paris', 'chisinau', 'bucuresti']
console.log(city[0], city[city.length-1])

// ### 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
city.pop()
city.push('test')
city.unshift('idk')

// ### 4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
const colors = ['red', 'blue', 'green']
for(let i=0; i<colors.length; i++) {
    console.log(colors[i])
}

// ### 4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
const animals = ['1', '2', '3']
animals.forEach(a => console.log("animalul: " + a))

// ### 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
function biggerThenTen(arr) {
    return arr.filter(a => a > 10)
}

// ### 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
const numbers = [4,12,34,5123,1]
numbers.sort((a,b) => a-b)

// ### 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.
function patratArr(arr) {
    return arr.map(a => a*a)
}

// ### 4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
console.log(numbers.reduce((pr, curr) => pr += curr, 0))

// ### 4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
console.log(numbers.includes(12))
console.log(numbers.indexOf(12))

// ### 4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
const combined = [...colors, ...city]

// ### 4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.
const bi = [
    [0, 1],
    [2, 3]
]
console.log(bi[0][1])

// ### 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
let uniqColors = [...new Set(colors)];

// ### 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.
colors.slice(0,2)
colors.splice(2,1)

// ## 6. Programare Asincronă
// ### 6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(() => {
    console.log('test')
}, 3000)

// ### 6.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
for(let i=1; i<=5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

// ### 6.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function salut(callback) {
    console.log('test')
    callback()
}

// ### 6.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.
function dupa2Secunde() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

// ### 6.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function verifica(valoare) {
  return new Promise((resolve, reject) => {
    if (valoare) {
      resolve("Promise rezolvat!")
    } else {
      reject("Promise respins!")
    }
  })
}

// ### 6.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
import Hey from "./salutari.js"
async function apelSalut() {
    await Hey()
}

// ### 6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
function func1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Funcția 1 rezolvată!"), 1000)
    })
}
function func2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Funcția 2 rezolvată!"), 1000)
    })
}
function func3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Funcția 3 rezolvată!"), 1000)
    })
}

await func1()
await func2()
await func3()

// ### 6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.error('Eroare la preluarea datelor:', error)
}

// ### 6.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
const promise1 = func1()
const promise2 = func2()
const promise3 = func3()

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Toate promisiunile au fost rezolvate:', results)
    })
    .catch(error => {
        console.error('O promisiune a fost respinsă:', error)
    });

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log('Rezultatele tuturor promisiunilor:', results)
    });

// ### 6.10 Creați o funcție care returnează un *Promise* ce se rezolvă după un număr aleatoriu de secunde între **1** și **5**.
function promiseAleatorie() {
  const secunde = Math.floor(Math.random() * 4) + 1
  return new Promise(resolve => {
    setTimeout(() => resolve(`Promise rezolvat după ${secunde} secunde`), secunde * 1000)
  })
}