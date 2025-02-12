//ex 5.1
const mes=document.getElementById("unid")
mes.textContent='Salutare tuturor!!!!'

//ex 5.2
const li=document.querySelectorAll("li");
li.forEach(el=>el.style.color='blue')

//ex 5.3
const p=document.createElement("p");
const container=document.getElementById("container");
p.textContent='Un element p am adaugat intr-un div...';
container.appendChild(p);

//ex 5.4
function schimbamImg() {
    const img = document.getElementById("poza");
    img.src = "img2.webp";
}

//ex 5.5 
const box=document.getElementById("box")
box.classList.add("oclasa");

//ex 5.6
document.querySelector("p").remove()

//ex 5.7
document.getElementById("unbutton").addEventListener("click", function(){
    document.querySelector("h2").textContent='Textul a fost schimbat apasind pe butonul de mai jos.'
});

//ex 5.8
document.getElementById("unInput").addEventListener("input", function(){
    document.getElementById("continut").textContent=this.value;
})

//ex 5.9
const lista=document.getElementById("lista");
const primul_copil=lista.firstElementChild.textContent;
const ultimul_copil=lista.lastElementChild.textContent;
console.log('Primul copil din lista: ', primul_copil);
console.log('Ultimul copil din lista: ', ultimul_copil);

//ex 5.10
const but=document.getElementById("but")
const altdiv=document.getElementById("altdiv")
but.addEventListener("click", function(){
    altdiv.classList.toggle("active");
})

//ex 5.11
const tabelul=document.getElementById("tabelul");
const table=document.createElement("table");
for(let i=0; i<3; i++){
    const rinduri=document.createElement("tr");
    for(let j=0; j<2; j++){
        const coloane=document.createElement("td");
        table.appendChild(coloane)
    }
    table.appendChild(rinduri);
}
tabelul.appendChild(table);

//ex 5.12
const lista1=document.getElementById("lista1");
const altinput=document.getElementById("altinput");
const butAdauga=document.getElementById("butAdauga");
butAdauga.addEventListener('click', function(){
    if(altinput.value!==''){
        const li=document.createElement("li");
        li.textContent=altinput.value;
        lista1.appendChild(li);
        altinput.value='';
    } else {
        alert('Introduceti din nou ceva.')
    }
})

//ex 7.1
setTimeout(()=> {
    console.log("Acest mesaj a fost afisat in consola dupa 3 secunde");
}, 3000);

//ex 7.2
function asteapta(ms){
 return new Promise(resolve=>setTimeout(resolve, ms));
}

async function cronometru(){
 for(let i=1; i<6; i++){
    console.log(i);
    await asteapta(1000);
 }
}
cronometru();

//ex 7.3
function salut(c){
    console.log("Aceasta este functia salut");
    c();
}

function c(){
    console.log("Aceasta este functia care se transmite ca callback")
}

salut(c);

//ex 7.4
async function ofunctie() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("A asteptat 2 secunde functia.");
            resolve();
        }, 2000);
    });
}

ofunctie();


//ex 7.5
function promiseFunction(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve("Promisiunea rezolvata");
        } else {
            reject("Promisiunea este respinsa");
        }
    });
}

promiseFunction(true)
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });



//ex 7.6
async function f1(){
    await ofunctie();
    console.log("Functia a fost finalizata")
}

f1();

//ex 7.7
function fun1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Prima functie este gata.");
            resolve()
        });
    })
}

function fun2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("A doua functie este gata.");
            resolve()
        })
    })
}

function fun3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("A treia functie este gata.");
            resolve()
        })
    })
}

fun1().then(()=>fun2()).then(()=>fun3()).then(()=>{console.log("S-au executat toate functiile")})

//ex 7.8
// URL-ul API
const ap = 'https://jsonplaceholder.typicode.com/posts';

fetch(ap).then((raspuns)=>{
    if(!raspuns.ok){
        throw new Error("A aparut o eroare.");
    } else {
        return raspuns.json();
    }
}).then((datele)=>{
    console.log("Datele primite sunt: ", datele);
}).catch((error)=>{
    console.log("A aparut o eroare neasteptata.");
})

//ex 7.9
function func1() {
    return new Promise(resolve => setTimeout(() => resolve("Functia 1 este gata!"), 1000));
  }
  
  function func2() {
    return new Promise(resolve => setTimeout(() => resolve("Functia 2 este gata!"), 2000));
  }
  
  Promise.all([func1(), func2()]).then((rezultat)=>{console.log(rezultat)}).catch((error)=>{console.log("Eroare")})


  function funct1() {
    return new Promise(resolve => setTimeout(() => resolve("Prima functie din ex 7.9"), 1000));
  }
  
  function funct2() {
    return new Promise(resolve => setTimeout(() => resolve("A doua functie din ex 7.9"), 2000));
  }

  const promis=[funct1(), funct2()];
  Promise.allSettled(promis).then((rezultat)=>{console.log(rezultat)});
  
  