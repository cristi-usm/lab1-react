function loadScript(src,conditie){
    return new Promise(function(resolve,reject){
        let script =document.createElement("script");
        script.src=src;

        script.onload=()=> resolve(script);
        script.onerror=()=> reject(new Error(`Sa produs o eroare ${src}`));
        if(conditie===true){
            document.head.append(script);
        }
    });
}

const promise=loadScript("fileHi.js",true);

promise.then(
    () => sayHi()
);