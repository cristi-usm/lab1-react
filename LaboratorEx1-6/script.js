//1. Variabile și Tipuri de date
//1.1 Declarați trei variabile utilizând var, let, și const. Atribuiți-le valori de tip number, string și boolean.
var nota = 10;
let examen = "Matematica";
const sustinut = true;

//1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând typeof.
function primesteVar(valoare){
    return typeof valoare;
}
console.log(primesteVar(2));
console.log(primesteVar("Elena"));
console.log(primesteVar(true));

//1.3 Convertiți o valoare de tip string în number și invers. Exemplu: "123" → 123 și 456 → "456".
let numar1 = "123";
let numar2 = 456;
let convertireNum = Number(numar1);
let convertireString = String(numar2);
console.log(numar1);
console.log(numar2);

//1.4 Declarați două variabile (nume, varsta) și creați o propoziție utilizând șabloane de string-uri (template literals - ``).
let nume = "Elena";
let varsta = 18;
let formProp = (`Ma numesc ${nume} si am ${varsta} ani`);
console.log(formProp);

//1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
let a = 12;
let b = 15;
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

//1.6 Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.
function verifVar(valoare){
    if (valoare === null){
        return "Valoarea este de tip null";
    }else if (valoare === undefined){
        return "Valoarea este de tip undefined";
    }else {
        return "Valoarea a fost gasita";
    }
}
console.log(verifVar(2));

//1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.
let obiectCarte = {
    nume: "Poiezii",
    pagini: 120,
    citita: true
}
obiectCarte.autor = "Mihai Eminescu";
delete obiectCarte.citita;
console.log(obiectCarte);

//1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
let cinciVal = [null, true, "Elena", 12, function(){}];
for (let i = 0; i < cinciVal.length; i++){
    console.log(typeof cinciVal[i]);
}

//2. Funcții
//2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function primesteNum(a, b){
    return a + b;
}
console.log(primesteNum(2, 4));

//2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.
function aria(latimea, inaltimea = 1){
    return latimea * inaltimea;
}
console.log(aria(2,4));
console.log(aria(2));

//2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
const anonima = (valoare) =>{
    return valoare * valoare;
}
console.log(anonima(2));

//2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function convertire(valoare){
    let convertVal = valoare.toUpperCase();
    return convertVal.length;
}
console.log(convertire("Elena"));

//2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
function calc(valoare){
    function dublu(){
        return valoare * 2;
    }
    function patrat(){
        return valoare * valoare;
    }
    return rez = {
        dublu: dublu(),
        patrat: patrat()
    }
}
console.log(calc(3));

//2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
const suma = (a, b) =>{
    return a + b;
}
console.log(suma(2,3));

//2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.
function aplica(functie, array){
for (let i = 0; i < array.length; i++){
    array[i] = functie(array[i]);
}
return array;
}
let arr = [1,2,3,4];
let dublu = x => x + 2;
console.log(aplica(dublu, arr));

//3. Obiecte
//3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.
//3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
//3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.
//3.4 Ștergeți proprietatea model din obiect.
//3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
//3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină.
//3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
//3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.


let masina = {
    marca: "BMW",
    model: "X7",
    an: 2002,
    descriere(){
        return `Marca: ${this.marca}, model: ${this.model}, an: ${this.an}`;
    }
}
console.log(masina);
console.log(masina.marca);
console.log(masina["model"])

masina.culoare = "rosie";
masina.an = 2022;
console.log(masina);

delete masina.model;
console.log(masina);

for (let cheia in masina){
    console.log(cheia, masina[cheia]);
}

if ("culoare" in masina){
    console.log("Masina are culoare");
}else{
    console.log("Masina nu are culoare");
}

let clonObiect = {...masina};
console.log(clonObiect);

let clonObiect2 = Object.assign({}, masina);
console.log(clonObiect2);

//3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
function primeste(persoana){
return `Ma numesc ${persoana.nume}, am ${persoana.ani} ani`
}
let persoana = {
    nume: "Ion",
    ani: 23
}
console.log(primeste(persoana));

//3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
let casa = {
    adresa:{
        strada: "Mihai Eminescu",
        oras: "Chisinau"
    }
}
console.log(casa);

//3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
//!in obiect proprietate si valoarea di parametri pe care o pui in obiect
function parametri(nume, varsta, nota){
    let student={
    nume: nume,
    varsta: varsta,
    nota: nota
}
return student;
}
console.log(parametri("Ion", 23, 10));

//3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
let calculator= {
    adunare(a, b){
        return a + b;
    },
    scadere(a, b){
        return a - b;
    },
    inmultire(a, b){
        return a * b;
    },
    impartirea(a, b){
        return a / b;
    }
}
console.log(calculator.adunare(2, 4));
console.log(calculator.scadere(6, 4));
console.log(calculator.inmultire(2, 4));
console.log(calculator.impartirea(8, 4));

//3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
let {adunare, scadere} = calculator;
console.log(adunare(2,3));
console.log(scadere(4,2));

//4. Array-uri
//4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
//4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.

let orase = ["Chisinau", "Causeni", "Nisporeni"];
console.log(orase[0]);
console.log(orase[2]);

orase.push("Orhei");
orase.unshift("Cantemir");
console.log(orase);

//4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element
let culori = ["roz", "albastru", "galben"];
for (let i = 0; i < culori.length; i++){
    console.log(culori[i]);
}

//4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
let animale = ["pisica", "iepure", "vulpe"];
animale.forEach((animal)=>{
    console.log(`${animal} este animalul meu preferat`);
})

//4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.
function numere(array){
    let filtreaza = array.filter(valoare => valoare > 10)
    return filtreaza;
}
console.log(numere([1,3,4,51,2]));

//4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
let num = [1,2,6,3,2];
let sortare = num.sort((a, b) =>{
    return a - b;
})
console.log(sortare);

//4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.
let numerele = [1,2,3,4,8,7];
let patratele = numerele.map(numar => {
    return numar * numar;
})
console.log(patratele);

//4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.
const elemente = [1,2,3,4,5];
const sumaNum = elemente.reduce((acumulator, valoareaCurenta)=> {
    return acumulator + valoareaCurenta;
}, 0);
console.log(sumaNum);

//4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.
//includes
const fructe = ["mere", "pere", "gutui"];
const areMere = fructe.includes("mere");
console.log(areMere);

//indexOf
const curcubeuCulori = ["alb", "negru", "galben"];
const pozitieAlb = curcubeuCulori.indexOf("alb");
console.log(pozitieAlb);

//4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).
let fete = ["Maria","Emilia"];
let baieti = ["Arsenie", "Alex"];
let combin = [...fete, ...baieti];
console.log(combin);

let combin2 = fete.concat(baieti);
console.log(combin2);

//4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.
const matrice = [
    [10, 20],
    [30, 40]
]
console.log(matrice[0][1]);

//4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
function eliminaDuplicate(arr) {
    return [...new Set(arr)];
}

const duplicatele = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminaDuplicate(duplicatele)); 

//4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.
const cosFructe = ["măr", "banană", "cireșe", "caisă", "pepene"]; 
const mincare = cosFructe.slice(1,3);

console.log(mincare);
console.log(cosFructe);

const mincare2 = cosFructe.splice(2, 1);
console.log(mincare2);



//6. Programare Asincronă
//6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(() =>{
    console.log("Acest mesaj a aparut dupa 3 secunde")
}, 3000);

//6.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.
let contor = 1;
const cronometru = setInterval(() => {
    console.log(contor);

    if(contor === 5){
        clearInterval(cronometru);
        console.log("Cronometrul sa oprit.")
    }
    contor++;
}, 1000);

//6.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function salut(functieCallback){
    console.log("Mesajul a fost afisat")

    functieCallback();
}
salut(()=>{
    console.log("Functia callback care ruleaza dupa salut");
});

//6.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
function douaSecunde(){
    return new Promise((rezolva) =>{

        setTimeout(()=>{
            rezolva("Promisiunea sa rezolvat dupa 2 secunde");
        }, 2000);
    })
}
douaSecunde()
.then(mesaj => {
    console.log(mesaj);
});

//6.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function verificaNumar(numar){
    return new Promise((rezolvata, respinsa)=>{
        if(numar > 0){
            rezolvata("Numarul este pozitiv");
        } else {
            respinsa("Numarul nu este pozitiv");
        }
    })
}

//6.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.
async function afiseazaRezultat() {
    try {
        const rezultat = await verificaNumar(5);
        console.log(rezultat);
    } catch (eroare) {
        console.log(eroare);
    }
}

//6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
function pasul1() {
    return new Promise((rezolva, respinsa) => {
        rezolva("Pasul 1 finalizat");
    });
}

function pasul2(mesaj) {
    return new Promise((rezolva, respinsa) => {
        rezolva(mesaj + " → Pasul 2 finalizat");
    });
}

function pasul3(mesaj) {
    return new Promise((rezolva, respinsa) => {
        rezolva(mesaj + " → Pasul 3 finalizat");
    });
}

//apelarea in lant
pasul1()
    .then(rezultat1 => {
        console.log(rezultat1);
        return pasul2(rezultat1);
    })
    .then(rezultat2 => {
        console.log(rezultat2);
        return pasul3(rezultat2);
    })
    .then(rezultatFinal => {
        console.log(rezultatFinal);
    })
    .catch(eroare => {
        console.log("Eroare:", eroare);
    });

//6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(raspuns => {
        return raspuns.json();
    })
    .then(data => {
        console.log("Date primite de la API:");
        console.log(data);
    })
    .catch(eroare => {
        console.log("Eroare:", eroare);
    });

//6.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.
const promisiune1 = Promise.resolve("Date 1");
const promisiune2 = Promise.resolve("Date 2");
const promisiune3 = Promise.resolve("Date 3");

//Promise all
Promise.all([promisiune1, promisiune2, promisiune3])
    .then(rezultate => {
        console.log("Toate promisiunile au fost rezolvate:");
        console.log(rezultate);
    })
    .catch(eroare => {
        console.log("Cel puțin o promisiune a eșuat:", eroare);
    });

const p1 = Promise.resolve("Succes 1");
const p2 = Promise.reject("Eroare 2");
const p3 = Promise.resolve("Succes 3");

//Promise.allSettled
Promise.allSettled([p1, p2, p3])
    .then(rezultate => {
        rezultate.forEach((rezultat, valoare) => {
            if (rezultat.status === "fulfilled") {
                console.log(`Promisiunea ${valoare + 1}:`, rezultat.value);
            } else {
                console.log(`Promisiunea ${valoare + 1}:`, rezultat.reason);
            }
        });
    });

//5. Manipulări DOM
//5.1 Selectați un element <h1> dintr-un document HTML folosind getElementById și schimbați textul acestuia.
const titlu = document.getElementById("titlu");
if (titlu){
    titlu.textContent = "Textul a fost schimbat";
}

//5.2 Selectați toate elementele <li> dintr-un document folosind querySelectorAll și schimbați culoarea textului.
const elementLi = document.querySelectorAll("#elementCuloare li");
for (let i = 0; i < elementLi.length; i++){
    elementLi[i].style.color = "red";
}

//5.3 Creați un element <p>, adăugați un text în acesta și introduceți-l la sfârșitul unui element <div> cu ID-ul container.
const container = document.getElementById("container");
const paragrafNou = document.createElement("p");
paragrafNou.textContent = "Al doilea paragraf a fost adaugat din JavaScript"
if(container){
container.appendChild(paragrafNou)
}else{
    console.log("Nu a fost gasit id container")
}

//5.4 Selectați o imagine și schimbați valoarea atributului src.
const imagine = document.getElementById("imagineProdus");
if(imagine){
    imagine.src = "img/img2.jpg";
}

//5.5 Adăugați o clasă nouă unui element cu ID-ul box.
const box = document.getElementById("box");
if(box){
    box.classList.add("clasa-noua");//are metoda add si remove
    console.log("A fost adaugata o clasa noua in div cu id box");
} 

//5.6 Eliminați un element <p> dintr-un document.
const paragraf2 = document.getElementById("paragraf2")
if(paragraf2){
    paragraf2.remove();
    console.log("Paragraful a fost sters din document");
}

//5.7 Adăugați un eveniment click unui buton, astfel încât să schimbe textul unui <h2> când este apăsat.
const laClickSchimb = document.getElementById("laClickSchimb");
const butonulMeu = document.getElementById("butonulMeu");
butonulMeu.addEventListener("click", ()=>{
laClickSchimb.textContent = "La apasarea butonului textul a fost schimbat";
laClickSchimb.style.color = "purple";
})

//5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const inputUtiliz = document.getElementById("inputUtiliz");
const continutAfisat = document.getElementById("continutAfisat");
inputUtiliz.addEventListener("input", ()=>{
    continutAfisat.textContent = inputUtiliz.value;
})

//5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.
const lafisamPrimulSiUltem = document.getElementById("afisamPrimulSiUltem");
const copii = lafisamPrimulSiUltem.children;
const containerRezultat = document.getElementById("containerRezultat");

if (copii.length > 0) {
    const primul = copii[0].textContent;
    const ultimul = copii[copii.length - 1].textContent;
    
    containerRezultat.insertAdjacentHTML('beforeend',
        `<h3>Afisarea primului si ultimului element</h3>
         <ul>
             <li>${primul}</li>
             <li>${ultimul}</li>
         </ul>`
    );
}

//5.10 Alternați o clasă active pe un element atunci când este apăsat un buton.
const apasaBtn = document.getElementById("apasaBtn");
const activeClass = document.querySelector(".activeClass");

apasaBtn.addEventListener("click", function(){
    activeClass.classList.toggle("active");
    console.log("Starea clasei a fost schimbata")
})

//5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.
document.body.insertAdjacentHTML("beforeend", '<table id="tabelulMeu" border="1"></table>');
const tabel = document.getElementById("tabelulMeu");

for (let i = 1; i <= 3; i++) {
    let continutRind = ""; 
    for (let j = 1; j <= 2; j++) {
        continutRind += `<td>Rând ${i}, Col ${j}</td>`;
    }

    tabel.insertAdjacentHTML("beforeend", `<tr>${continutRind}</tr>`);
}

//5.12 Creați o listă <ul> și adăugați elemente noi la apăsarea unui buton.
const taraInput = document.getElementById("taraInput");
const listaTari = document.getElementById("listaTari");
const btnAdaug = document.getElementById("btnAdaug");

btnAdaug.addEventListener("click", (e) => {
    e.preventDefault(); 
    adaugaInput();
});

function adaugaInput() {
    const taraValoare = taraInput.value;

    if (taraValoare.trim() !== "") {
        listaTari.insertAdjacentHTML("beforeend", `<li>${taraValoare}</li>`);
        taraInput.value = "";
    } else {
        console.log("Input-ul este gol!");
    }
}






















 



























