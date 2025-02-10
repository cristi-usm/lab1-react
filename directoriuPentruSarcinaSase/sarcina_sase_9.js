// 7.9
const p1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 5000));

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values)
})

Promise.allSettled([p1, p2, p3]).then(results => {
    console.log(results);
})

