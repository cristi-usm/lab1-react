// 7.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
function waiting2sec(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise solved ... I have no idea why it works, but it works.");
        }, 2000)
    });
}
waiting2sec().then((message) => console.log(message));