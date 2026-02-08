import salutAsc from "./module-ES/salutari.js";
import * as user from "./module-ES/dateUtilizator.js";
//6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(() => {
  console.log("Here after 3 seconds! - 6.1");
}, 3000);
console.log("");

//6.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.
for (let i = 1; i < 6; i++) {
  setTimeout(() => {
    console.log(`${i} - 6.2`);
  }, i * 1000);
}
console.log("");

//6.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
const salut = (clb) => {
  console.log("Second message appears in 2 seconds");
  setTimeout(() => {
    clb();
  }, 2000);
};
const afterSalut = () => {
  console.log("Hey, I am the second message! (from callback) - 6.3");
};

salut(afterSalut);
console.log("");

//6.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
async function delayPromise() {
  return setTimeout(() => {
    console.log(`Promise resolved after 2 seconds! - 6.4`);
  }, 2000);
}
await delayPromise();

//6.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function rrPromise(val) {
  return new Promise((resolve, reject) => {
    if (val) {
      resolve(`Val is ${val} - resolved - 6.5`);
    } else {
      reject(`Val is ${val} - rejected - 6.5`);
    }
  });
}
rrPromise(false).catch((error) => {
  console.log(error);
});

//6.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.
async function salutAsync() {
  console.log("6.6");

  salutAsc(user.name[2]);
}
salutAsync();

//6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
function promiseOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise One - 6.7");
      resolve();
    }, 1000);
  });
}

function promiseTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Two - 6.7");
      resolve();
    }, 1000);
  });
}

function promiseThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Three - 6.7");
      resolve();
    }, 1000);
  });
}

async function runPromises() {
  await promiseOne();
  await promiseTwo();
  await promiseThree();
  console.log("Stopped!");
}

runPromises();

//6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const limited = result.slice(0, 5);
    console.log("6.8");
    console.log(limited);
  } catch (error) {
    console.error(error.message);
  }
}
getData();

//6.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000),
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 1500),
);

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 2000),
);

Promise.all([p1, p2, p3]).then((results) => {
  console.log("All resolved:", results, " - 6.9");
});
Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log("All settled:", results, "- 6.9");
});
