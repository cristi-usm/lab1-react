// 8.1

// 7.1
setTimeout(() => {
  console.log("Hello World!");
}, 3000);

// 7.2

let nr = 1;

let timer = setInterval(() => {
  console.log(nr);
  nr++;

  if (nr > 5) {
    clearInterval(timer);
  }
}, 1000);

// 7.3

function hello(callback) {
  console.log("Salut!");
  callback();
}

function message() {
  console.log("Message");
}

hello(message);

// 7.4
function myPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promisiune dupa 2 secunde");
    }, 2000);
  });
}

myPromise().then((sms) => {
  console.log(sms);
});

// 7.5

function checkV(value) {
  return new Promise((resolve, reject) => {
    if (value > 20) {
      resolve("Valoarea este mai mare decat 20");
    } else {
      reject("Valoarea este mai mica decat 20");
    }
  });
}

checkV(26)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

checkV(16)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 7.6

async function callMyPromise() {
  const result = await myPromise();
  console.log(result);
}

callMyPromise();

// 7.7
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1");
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2");
    }, 1500);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 3");
    }, 2000);
  });
}

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result2) => {
    console.log(result2);
    return step3();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.log("A aparut o eroare " + error);
  });

// 7.8

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

// 7.9
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "Primul rezultat")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Al doilea rezultat")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1500, "Al treilea rezultat")
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Eroare:", error);
  });

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
