// 7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
function promise1(bool){
    if(bool === true){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Promise solved ... I have no idea why it works, but it works.")
                resolve("Promise solved ... I have no idea why it works, but it works.");
            })
        });
    } else {
        return new Promise((reject)=>{
            setTimeout(()=>{
                console.log("NOT WORKING. This is torturing me ... PLEASE HELP ");
                reject(new Error("NOT WORKING. This is torturing me ... PLEASE HELP "));
            })
        });
    }
}
function promise2(bool){
    if(bool === true){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Promise solved ... I have no idea why it works, but it works.")
                resolve("Promise solved ... I have no idea why it works, but it works.");
            })
        });
    } else {
        return new Promise((reject)=>{
            setTimeout(()=>{
                console.log("NOT WORKING. This is torturing me ... PLEASE HELP ");
                reject(new Error("NOT WORKING. This is torturing me ... PLEASE HELP "));
            })
        });
    }
}
function promise3(bool){
    if(bool === true){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("Promise solved ... I have no idea why it works, but it works.")
                resolve("Promise solved ... I have no idea why it works, but it works.");
            })
        });
    } else {
        return new Promise((reject)=>{
            setTimeout(()=>{
                console.log("NOT WORKING. This is torturing me ... PLEASE HELP ");
                reject(new Error("NOT WORKING. This is torturing me ... PLEASE HELP "));
            })
        });
    }
}

console.log("Prea multe promisiuni, prea putine fapte....");
promise1(true)
    .then(promise2(false))
    .then(promise3(true))
    .catch((eroare) => {
        console.error("A apărut o eroare:", eroare);
    });
