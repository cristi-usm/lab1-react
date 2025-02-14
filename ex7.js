//7.1
setTimeout(() => {
    console.log("Acest mesaj apare după 3 secunde!");
}, 3000);

//7.2
let numar = 1;
const cronometru = setInterval(() => {
    console.log(numar);
    
    if (numar === 5) {
        clearInterval(cronometru);
    }
    
    numar++;
}, 1000);

//7.3
function salut(callback) {
    console.log("Bună ziua, acesta este mesajul initial!");
    callback();
}

function mesajCallback() {
    console.log("Acesta este mesajul din callback!");
}

salut(mesajCallback);

//7.4
function asteaptaDouaSecunde() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promisiunea a fost rezolvată după 2 secunde!");
        }, 2000);
    });
}

//7.5
function verificaValoare(valoare) {
    return new Promise((resolve, reject) => {
        if (valoare > 10) {
            resolve("Valoarea este suficient de mare!");
        } else {
            reject("Valoarea este prea mică!");
        }
    });
}

//7.6
async function afiseazaRezultat() {
    const rezultat = await asteaptaDouaSecunde();
    console.log(rezultat);
}

afiseazaRezultat();

//7.8
async function preiaPostari() {
    try {
        const raspuns = await fetch("https://jsonplaceholder.typicode.com/posts");
        const date = await raspuns.json();
        console.log(date.slice(0, 5)); // Afișăm primele 5 postări
    } catch (eroare) {
        console.error("Eroare la preluarea datelor:", eroare);
    }
}

preiaPostari();

//7.9
const promisiune1 = new Promise(resolve => 
    setTimeout(() => resolve("Rezultat 1"), 1000)
);

const promisiune2 = new Promise((resolve, reject) => 
    setTimeout(() => reject("Eroare la promisiune 2"), 2000)
);

const promisiune3 = new Promise(resolve => 
    setTimeout(() => resolve("Rezultat 3"), 3000)
);

// Așteaptă toate promisiunile să se rezolve sau să fie respinse
Promise.all([promisiune1, promisiune3])
    .then(rezultate => 
        console.log("Promise.all rezultate:\n", rezultate)
    )
    .catch(eroare => 
        console.error("Promise.all eroare:\n", eroare)
    );

// Așteaptă toate promisiunile și returnează starea fiecăreia
Promise.allSettled([promisiune1, promisiune2, promisiune3])
    .then(rezultate => 
        console.log("Promise.allSettled rezultate:\n", rezultate)
    );

    