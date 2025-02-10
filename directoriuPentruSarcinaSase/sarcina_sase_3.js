// 7.3
const loadContext = (src, callback) => {
    let script = document.createElement("script")
    script.src = src

    script.onload = () => callback(script)
    document.head.append(script)
}

loadContext("alt_salut.js", () => {
    salutare()
})