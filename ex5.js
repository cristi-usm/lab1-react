//5.1
document.getElementById("titlu").textContent = "Nou titlu";

//5.2
const lista = document.querySelectorAll("li");
lista.forEach(item => item.style.color = "blue");

//5.3
const p = document.createElement("p");
p.textContent = "Textul adăugat";
document.getElementById("container").appendChild(p);

//5.4
document.getElementById("imagine").src = "noua_imagine.jpg";

//5.5
document.getElementById("box").classList.add("noua-clasa");

//5.6
const pElement = document.querySelector("p");
pElement.remove();

//5.7
document.getElementById("buton").addEventListener("click", function() {
    document.querySelector("h2").textContent = "Textul a fost schimbat!";
});

//5.8
const input = document.getElementById("inputText");
const para = document.getElementById("outputText");

input.addEventListener("input", function() {
    para.textContent = input.value;
});

//5.9
const ul = document.querySelector("ul");
const primulElement = ul.firstElementChild.textContent;
const ultimulElement = ul.lastElementChild.textContent;

console.log(`Primul element: ${primulElement}`);
console.log(`Ultimul element: ${ultimulElement}`);

