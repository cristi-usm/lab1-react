// 7.5
const loadScript = (src, bool) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src

        if(bool === true) {
            script.onload = () => resolve(script);
        } else {
            script.onload = () => reject(new Error("Tot e pierdut"))
        }

        document.head.append(script)
    })
}

const promise = loadScript("salut.js", true)

promise.then(
    () => salut(),
    (error) => handleError(error)
)