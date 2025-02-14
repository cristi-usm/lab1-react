// 7. Programare Asincronă
// 7.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(()=>{console.log('Acesta este un mesaj cu delay de 3 secunde.')}, 3000)

// 7.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
for(let i = 1; i < 6; i++){
    setTimeout(() => {console.log(`Secunda numero ${i}`)}, i * 1000)
}

// 7.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function salutare(){
    console.log('Salut tinere!')
}

function salut(func){
    console.log('Va urma apelarea unei functii')
    func()
}

salut(salutare)

// 7.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.
function firstPromise(){
    return new Promise((resolve) => {
    setTimeout(() => {
        const prop = 10 > 7
        if(prop){
            resolve('Promise cu succes!');
        } 
    }, 2000)
})
}

firstPromise().then((text) => console.log(text));

// 7.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function secondPromise(param){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(param){
            resolve('Promise cu succes!');
        } else {
            reject('Eșuat!')
        }
    }, 2000)
})
}

secondPromise(1 > 7)
.then(() => console.log('Yey!'))
.catch(() => console.log('Shit!'))

// 7.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
async function funcAsincrona() {
    const rezultat = await firstPromise();
    console.log(rezultat)
}

funcAsincrona()

// 7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500)
    })
}

function promise2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done iar!')
        }, 2000)
    })
}

function promise3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('De ce sunt atat de multe conditii?')
        }, 3000)
    })
}

// promise1()
// .then((rezultat) => {console.log(rezultat)}) ?????

// 7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })

// 7.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
Promise.all([promise1(), promise2(), promise3()])
    .then((results) => {
        console.log("Au fost rezolvate promisiunile:", results)
    })

Promise.allSettled([promise1(), promise2(), promise3()])
    .then((results1) => {
        console.log("Rezultatele:", results1)
    })
