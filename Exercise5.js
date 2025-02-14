//  5. Manipulări DOM 
//  5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.
const primText = document.getElementById('textIntro')
primText.textContent = 'Azi e 14 februarie!'

//  5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.
const itemList = document.querySelectorAll('li')
itemList.forEach((element) =>element.style.color = 'blue')

//  5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.
const htmlParagraf = `<p>Acesta este un paragraf scris in JavaScript</p>`
const myContainer = document.getElementById('container')

myContainer.insertAdjacentHTML('beforeend', htmlParagraf)
//  5.4 Selectați o imagine și schimbați valoarea atributului *src*.
const imagine = document.getElementById('image1')
imagine.src = `../Imagini/bercu.jpg`

//  5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
const elementBox = document.getElementById('box')
elementBox.classList.add('stil')

//  5.6 Eliminați un element **`<p>`** dintr-un document.
const paragraful2 = document.getElementById('paragraf2')
paragraful2.remove()

//  5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
const butonul = document.getElementById('button1')
const header2 = document.getElementById('header2')

function schimbaText(){
    header2.textContent = 'Am schimbat textul!'
}

butonul.addEventListener('click', schimbaText)
//  5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const inputText = document.getElementById('input')
const paragrafAfisare = document.getElementById('paragraf3')

function afiseazaText(){
    paragrafAfisare.textContent = inputText.value 
}

inputText.addEventListener('input', afiseazaText)

//  5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
const listaMea = document.getElementById('listaMea')
console.log(listaMea.firstElementChild.innerText)
console.log(listaMea.lastElementChild.innerText)

//  5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.
butonul.addEventListener('click', ()=>{
    header2.classList.toggle('active')
}) //??????????

//  5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.
const containerTabel = document.getElementById('containerTabel')
const butonTabel = document.getElementById('creareTabel')


butonTabel.addEventListener('click', () => {containerTabel.innerHTML = '' 

const tabel = document.createElement('table')

for(let i = 0; i < 3; i++){
    const row = document.createElement('tr');
    for(let j = 0; j < 2; j++){
        const col = document.createElement('td');
        col.innerText = `Elementul ${i+1}/${j+1}`
        row.appendChild(col)
    }
    tabel.appendChild(row)
}
tabel.classList.add('tabelStil')
containerTabel.appendChild(tabel)
})

//  5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.
const listaMea2 = document.getElementById('listDinamica')
const butonLista = document.getElementById('adaugaElement')
let elementeLista = 0

butonLista.addEventListener('click', () => {
    elementeLista++
    const elementLista = document.createElement('li')
    elementLista.innerText = `Acesta este elementul ${elementeLista}`
    listaMea2.appendChild(elementLista)
})
