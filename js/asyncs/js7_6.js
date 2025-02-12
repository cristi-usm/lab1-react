// 7.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`The script ${src} said Goodbye`));

        document.head.append(script);
    });
}

const promise = loadScript("js7_4.js");
promise.then(()=>waiting2sec());

const asyncFn = ()=>{return new Promise((resolve)=>{
    resolve(promise);
})};
asyncFn().then((message)=>console.log(message));