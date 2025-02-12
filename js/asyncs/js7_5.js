// 7.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function mightReject(bool){
    if(bool === true){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Promise solved ... I have no idea why it works, but it works.");
            })
        });
    } else {
        return new Promise((reject)=>{
            setTimeout(()=>{
                reject(new Error("NOT WORKING. This is torturing me ... PLEASE HELP "));
            })
        });
    }
}
mightReject(false).then((message) => console.log(message));