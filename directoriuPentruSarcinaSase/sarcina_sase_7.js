// 7.7
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`Script-ul ${src} nu s-a pornit`))

        document.head.append(script)
    })
}

function handleError(error) {
    console.error(error)
}

const promise = loadScript("functii7_7/f1.js");

promise.then(
    () => func1(),
    (error) => handleError(error)
)

promise.then(() => func1()).catch((error) => handleError(error));

promise
    .then(() => loadScript("functii7_7/f2.js"))
    .then(() => loadScript("functii7_7/f3.js"))
    .then(() => func3())
    .catch((error) => handleError(error))