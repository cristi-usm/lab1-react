// ## 5. Manipulări DOM 
// ### 5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.
const h1 = document.getElementById('test')

// ### 5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.
const li = document.querySelectorAll('li')

// ### 5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.
const p = document.createElement('p')
p.innerText = 'test'
const div = document.getElementById('container')
div.appendChild(p)
// ### 5.4 Selectați o imagine și schimbați valoarea atributului *src*.
const img = document.getElementById('img')
img.src = 'testing'

// ### 5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
const box = document.getElementById('box')
box.classList.add('test')

// ### 5.6 Eliminați un element **`<p>`** dintr-un document.
box.remove()

// ### 5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
const clickButton = document.getElementById('clickButton')
const texting = document.getElementById('texting')

clickButton.addEventListener('click', () => {
    texting.innerText = 'changed'
})

// ### 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const input = document.getElementById("textInput");
const preview = document.getElementById("preview");

input.addEventListener("input", function () {
  preview.textContent = input.value;
});

// ### 5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
const ul = document.getElementsByTagName('ul')
const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;

// ### 5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.
clickButton.addEventListener('click', () => {
    clickButton.classList.toggle('active')
})

// ### 5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.
const table = document.createElement("table");

for (let i = 0; i < 3; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 2; j++) {
    const cell = document.createElement("td");
    cell.textContent = 'test';
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);

// ### 5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.
const inp = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("lista");

button.addEventListener("click", () => {
  if (inp.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = inp.value;

    list.appendChild(li);
    inp.value = "";
  }
});
