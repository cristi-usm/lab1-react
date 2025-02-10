// 7.6
const loadContext = (src, callback) => {
    let script = document.createElement("script")
    script.src = src

    script.onload = () => callback(script)
    document.head.append(script)
}

loadContext("sarcina_sase_4.js", () => molodetCheck())