// 5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.

const text = document.getElementById("text")
text.textContent = "Welcome back in JS)))"

// 5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.

const listElements = document.querySelectorAll("li")
listElements.forEach(element => {
    element.style.color = "red"
})

// 5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.

const p = document.createElement("p")
const container = document.getElementById("container")

p.textContent = "Please look at meme from LinkedIn)"
container.appendChild(p)

// 5.4 Selectați o imagine și schimbați valoarea atributului *src*.

const img = document.getElementById("js-meme1")
img.src = "./Assets/js-meme2.jpg"
img.alt = "js-meme2"
img.id = "js-meme2"

// 5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.

const box = document.getElementById("box")
box.classList.add("red-box")

// 5.6 Eliminați un element **`<p>`** dintr-un document.

const pd = document.getElementById("deleted")
pd.remove()

// 5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.

const textToChange = document.querySelector("h2")
const btn1 = document.getElementById("btn-1")

btn1.addEventListener("click", () => {
    textToChange.innerText = "At this phase I losed some nerves:)"
    console.log(textToChange)
})

// 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.

const input = document.getElementById("input")
const paragraf = document.getElementById("paragraf")

input.addEventListener("input", () =>{
    paragraf.textContent = input.value
})

// 5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.

const list = document.getElementById("testing-list")
const firstChild = list.firstElementChild.textContent
const lastChild = list.lastElementChild.textContent
const children = document.getElementById("children")
children.textContent = `First child: ${firstChild}, Last child: ${lastChild}`

// 5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.

const toggleBtn = document.getElementById("toggle-btn")
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("active")
})

// 5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.

const table = document.createElement("table")
for(let i = 0; i < 3; i++) {
    const row = document.createElement("tr")
    for(let j = 0; j < 2; j++) {
        const cell = document.createElement("td")
        row.appendChild(cell)
    }
    table.appendChild(row)
}
document.body.appendChild(table)   

// 5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.

const anotherList = document.getElementById("another-list")
const addBtn = document.getElementById("add-btn")

let count = 1

addBtn.addEventListener("click", () => {
    const newElement = document.createElement("li")
    newElement.textContent = "*".repeat(count)
    anotherList.appendChild(newElement)
    count++
})
