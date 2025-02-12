// 7.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.
const p1 = new Promise((resolve) => setTimeout(() => resolve("pain"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("double pain"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("triple pain"), 3000));

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
});

Promise.allSettled([p1, p2, p3]).then((results) => {
    console.log(results);
});

Promise.race([p1, p2, p3]).then((value) => {
    console.log(value); // 1
});

Promise.any([p1, p2, p3]).then((value) => {
    console.log(value); // 1
});
