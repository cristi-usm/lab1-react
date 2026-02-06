// 6.1

setTimeout(() => {
    console.log("dupa 3 secunde.")
}, 3000)

// 6.2

let contor = 1
const interval = setInterval(() => {
    console.log(contor)
    if (contor === 5) {
        clearInterval(interval)
    }
    contor++
}, 1000)

// 6.3

function salut(callback) {
    console.log("Hello iopta!")
    callback()
}

salut(() => console.log("callback!!."))

// 6.4

const promisiuneSimpla = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(" 2 secunde!"), 2000)
    })
};

// 6.5

const verificaNumar = (n) => {
    return new Promise((resolve, reject) => {
        if (n > 10) resolve("numar mare")
        else reject("numar mic")
    })
}

// 6.6

async function ruleazaAsteptare() {
    console.log("jdiom...");
    const rezultat = await promisiuneSimpla(); 
    console.log(rezultat);
}
ruleazaAsteptare()

// 6.7

const pas1 = () => Promise.resolve("Pas 1 gata")
const pas2 = (msg) => Promise.resolve(msg + " -> Pas 2 gata")
const pas3 = (msg) => Promise.resolve(msg + " -> Pas 3 gata")

pas1()
    .then(res => pas2(res))
    .then(res => pas3(res))
    .then(final => console.log(final))

// 6.8

async function preiaDate() {
    try {
        const raspuns = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const date = await raspuns.json();
        console.log("Date primite de la API:", date.title);
    } catch (eroare) {
        console.error("A apărut o problemă la fetch:", eroare);
    }
}
preiaDate();

// 6.9

const p1 = Promise.resolve("OK 1")
const p2 = Promise.reject("Eroare la 2")
const p3 = Promise.resolve("OK 3")

Promise.all([p1, p3])
    .then(valori => console.log("Toate reușite:", valori))
    .catch(err => console.log("Una a eșuat:", err))

Promise.allSettled([p1, p2, p3])
    .then(rezultate => console.log("Starea tuturor:", rezultate))

