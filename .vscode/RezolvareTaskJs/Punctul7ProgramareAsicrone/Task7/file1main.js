// ### 7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 

function loadScript(src){
    return new Promise(function(resolve,reject){
        let script =document.createElement("script");
        script.src=src;
        script.onload = () => resolve(script);
        script.onerror = () =>
            reject(new Error(`Sa realizat o eroare ${src}`));

        document.head.append(script);
    });
}


function handleError(error) {
    console.error(error);
}


//primul script executat 
const promise=loadScript("file3.js");


// promise.then(
//     ()=>hi(),
//     (error)=>handleError(error)
// );

//promise.then(()=>salut()).catch((error)=>handleError(error));

promise
.then(()=>loadScript("file2.js"))//hi()
.then(()=>loadScript("file4.js"))//addSalut()
.then(()=>addSalut())
.catch((error) => handleError(error)); 

