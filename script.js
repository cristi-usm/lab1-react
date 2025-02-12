// 5.1

const h1 = document.getElementById("h1");
h1.innerHTML = "Hello";

// 5.2
const list = document.querySelectorAll("li");
list[0].style.color = "red";

// 5.3

let newP = document.createElement("p");

newP.textContent = "Acesta este un p";

let container = document.getElementById("container");

container.appendChild(newP);

// 5.4
const img = document.querySelector("img");
img.src =
  "https://images.unsplash.com/photo-1739056656210-7c3cab6fff42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// 5.5
const h2 = document.getElementById("box");
h2.classList.add("example");

// 5.6
const element = document.getElementById("p");
element.remove();

// 5.7

const button = document
  .getElementById("btn")
  .addEventListener("click", function () {
    const h3 = (document.getElementById("title").innerText = "Hi");
  });

// 5.9

const ul = document.querySelector("ul");

const firstElement = ul.firstElementChild.textContent;
const lastElement = ul.lastElementChild.textContent;
console.log(firstElement);
console.log(lastElement);

// 5.11
