// 6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.

setTimeout(() => {
    console.log("Hello")
}, 3000)

// 6.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.

let i = 1
const cronometru = setInterval(() => {
    console.log(i)
    if (i === 5) {
        clearInterval(cronometru)
    }
    i++
}, 1000)

// 6.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.

const salut = (callback) =>{
    console.log("test")
    callback()
}

// 6.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.

const promise1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("test")
        }, 2000)
    })
}

// 6.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.

const promise2 = (param) => {
    return new Promise((resolve, reject) => {
        if(param > 9) {
            resolve("I want for my pain a 10))")
        } else {
            reject("Maybe you'll reconsider it")
        }
    })
}

// 6.6 Scrieți o funcție asincronă care apelează funcția de la punctul **6.4** și afișează rezultatul.

async function call(func) {
    const result = await func()
    console.log(result)
}

call(promise1)

// 6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 

function f1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("test1")
        }, 2000)
    })
}

function f2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("test2")
        }, 2000)
    })
}

function f3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("test3")
        }, 2000)
    })
}

f1()
    .then(result => {
    console.log(result)
    return f2()
}).then(result => {
    console.log(result)
    return f3()
}).then(result => {
    console.log(result)
})


// 6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.log(error)
}

// 6.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.

const p1 = f1()
const p2 = f2()
const p3 = f3()

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results)
    })

Promise.allSettled([p1, p2, p3])
    .then(results => {
        console.log(results)
    })