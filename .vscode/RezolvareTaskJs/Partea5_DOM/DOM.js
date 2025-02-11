// ## 5. Manipulări DOM 
// ### 5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.
// ### 5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.
// ### 5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.
// ### 5.4 Selectați o imagine și schimbați valoarea atributului *src*.
// ### 5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
// ### 5.6 Eliminați un element **`<p>`** dintr-un document.
// ### 5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
// ### 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
// ### 5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
// ### 5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.
// ### 5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.
// ### 5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.

//5.1 
const getH1=document.getElementById('elem_h1').innerHTML="HelpHelpPlease";

//5.2
const liElement=document.querySelectorAll("li");
liElement.forEach(elem=>{
    elem.style.color="green";
});

//5.3
const getContainer=document.getElementById("container")
const createDiv=document.createElement("p");
createDiv.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry";
getContainer.appendChild(createDiv)

//5.4
function schimbare() {
    document.getElementById("imgFirst").src = ".vscode\RezolvareTaskJs\Partea5_DOM\second.jpg";
}

//5.5
// function addClass(){
//     const elem=document.getElementById("box").addClass("clasaNoua")
// }

const box = document.getElementById('box')
box.classList.add('classNoua')

//5.6
const getPpp=document.getElementById("delete");
getPpp.remove()

//5.7
const buton=document.addEventListener("click",function(){
  const text=  document.getElementById("h2-buton")
  text.textContent="Se schimba texttul ";
    setTimeout(function(){
        text.textContent="Merci Cristi multttttttttt";
    },2000);
})

//5.8

const textInput=document.getElementById("textInput");
const textOut=document.getElementById("textOutput");
textInput.addEventListener("keydown",func=>{
    textOut.textContent=textInput.value;
})

//5.9


const ulList = document.getElementById("ulElement");

if (ulList) {
    const firstText = ulList.firstElementChild?.textContent;
    const lastText = ulList.lastElementChild?.textContent;

    console.log("Primul element:", firstText);
    console.log("Ultimul element:", lastText);

    const output = document.createElement("p");
    output.textContent = `Primul: ${firstText}, Ultimul: ${lastText}`;
    document.getElementById("item5-9").appendChild(output);
}

//5.10
const tabelElement = document.getElementById("tabetElement");
let table = ''; 
const rows = 7; //spoate de pus orice numar
const cols = 20;  //spoate de pus orice numar
for (let r = 0; r < rows; r++) {
   table += '<tr>';
   for (let c = 1; c <= cols; c++) {
      table += '<td>' + c + '</td>'; 
   }
   table += '</tr>';
}
//merci Cristi , l-am facut cu un video de 8 ani in urma
tabelElement.innerHTML = '<table border="1">' + table + '</table>';


//5.12
function newElement() {
const li=document.createElement("li");
document.getElementById("addElemUl").appendChild(li);
}
