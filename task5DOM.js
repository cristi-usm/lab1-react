const great = document.getElementById("greating");
great.textContent = "Salut";

const liuri = document.querySelectorAll("li");
liuri.forEach((el) => {
  el.style.color = "blue";
});
const para = document.createElement("p");
para.textContent = "Ma numesc Cristian Stamatov";
const div = document.getElementById("container");
div.appendChild(para);

const img = document.getElementById("chisinau");
img.src = "moldova.png";

const box = document.getElementById("box");
box.classList.add("important");

const deleted = document.getElementById("delete");
deleted.remove();

const toggleBtn = document.getElementById("toggle");
const paragrafulLo = document.getElementById("textul");
toggleBtn.addEventListener("click", () => {
  paragrafulLo.style.color = "red";
});

const input = document.getElementById("tasta");
const reztastat = document.getElementById("rez");
input.addEventListener("input", () => {
  reztastat.innerText = input.value;
});

const lista = document.getElementById("lista");
const listaCopii = document.getElementById("copiii");
listaCopii.textContent = `Primul copil:${lista.firstElementChild.textContent}, Ultimul copil:${lista.lastElementChild.textContent}`;

const mareste = document.getElementById("toggleText");
const text = document.getElementById("textNemarit");

mareste.addEventListener("click", () => {
  text.classList.toggle("active");
});

const tabel = document.createElement("table");
for (let i = 0; i < 3; i++) {
  const rand = document.createElement("tr");
  for (let j = 0; j < 2; j++) {
    const coloana = document.createElement("td");
    rand.appendChild(coloana);
  }
  tabel.appendChild(rand);
}
document.body.appendChild(tabel);

const listaElem = document.getElementById("list");
const adaugaBtn = document.getElementById("adaugareBtn");
let count = 1;

adaugaBtn.addEventListener("click", () => {
  const element = document.createElement("li");
  element.textContent = "$".repeat(count);
  listaElem.appendChild(element);
  count++;
});
