//5.1 Selectați un element <h1> dintr-un document HTML folosind getElementById și schimbați textul acestuia.
const changeText = document.getElementById("text");
changeText.innerText = "Continuam sa recapitulam!";

//5.2 Selectați toate elementele <li> dintr-un document folosind querySelectorAll și schimbați culoarea textului.
const listItems = document.querySelectorAll("li");
listItems.forEach((el) => {
  el.style.color = "brown";
});

//5.3 Creați un element <p>, adăugați un text în acesta și introduceți-l la sfârșitul unui element <div> cu ID-ul container.
const newText = document.createElement("p");
newText.innerText = "Let's explore The USA!";
const container = document.getElementById("container");
container.insertAdjacentElement("beforeend", newText);

//5.4 Selectați o imagine și schimbați valoarea atributului src.
const image = document.getElementById("img");
image.src =
  "https://i.pinimg.com/736x/f9/e6/7f/f9e67f17c344b757bec92b56fd3ea3bb.jpg";

//5.5 Adăugați o clasă nouă unui element cu ID-ul box.
const box = document.getElementById("box");
box.className = "boxClass";

//5.6 Eliminați un element <p> dintr-un document.
const toBeRemoved = document.getElementById("to-remove");
toBeRemoved.remove();

//5.7 Adăugați un eveniment click unui buton, astfel încât să schimbe textul unui <h2> când este apăsat.
const btn = document.getElementById("change-text");
const btnTextChange = document.getElementById("txt");
btn.addEventListener("click", () => {
  btnTextChange.innerText = "I am cooking";
});

//5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const input = document.querySelector("#textInput");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});

//5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.
const drinks = document.querySelector("#drinks");
console.log(drinks.firstElementChild.textContent);
console.log(drinks.lastElementChild.textContent);

//5.10 Alternați o clasă active pe un element atunci când este apăsat un buton.
const toggleBtn = document.getElementById("toggle-btn");
const toggleTxt = document.getElementById("toggle-txt");
toggleBtn.addEventListener("click", () => {
  toggleTxt.classList.toggle("active");
});

//5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.
const tableContainer = document.getElementById("table-container");
const createTableBtn = document.getElementById("create-table");
createTableBtn.addEventListener("click", () => {
  tableContainer.insertAdjacentHTML(
    "beforeend",
    "<table><tr><td>1.1</td><td>1.2</td></tr><tr><td>2.1</td><td>2.2</td></tr><tr><td>3.1</td><td>3.2</td></tr></table>",
  );
});

//5.12 Creați o listă <ul> și adăugați elemente noi la apăsarea unui buton.
const addToList = document.getElementById("add-list");
const addBtn = document.getElementById("list-btn");
addBtn.addEventListener("click", () => {
  const listEl = document.createElement("li");
  listEl.innerText = "Added to list";
  addToList.appendChild(listEl);
});
