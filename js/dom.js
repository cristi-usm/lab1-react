// 5. Manipulări DOM
// 5.1 Selectați un element <h1> dintr-un document HTML folosind getElementById și schimbați textul acestuia.
const changeTxt = document.getElementById("txt");
changeTxt.textContent = "What a beautiful day to die ...";

// 5.2 Selectați toate elementele <li> dintr-un document folosind querySelectorAll și schimbați culoarea textului.
const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
    item.style.color = "red";
});

// 5.3 Creați un element <p>, adăugați un text în acesta și introduceți-l la sfârșitul unui element <div> cu ID-ul container.
const newParagraph = document.createElement("h4");
newParagraph.textContent = "Programming PRO tip: Code JavaScript underwater so nobody can see you crying...";
document.getElementById("container").appendChild(newParagraph);

// 5.4 Selectați o imagine și schimbați valoarea atributului src.
const image = document.querySelector("img");
image.src = "img/meme2.png";

// 5.5 Adăugați o clasă nouă unui element cu ID-ul box.
const box = document.getElementById("box");
box.classList.add("added");

// 5.6 Eliminați un element <p> dintr-un document.
const paragraph = document.querySelector("p");
paragraph.remove();

// 5.7 Adăugați un eveniment click unui buton, astfel încât să schimbe textul unui <h2> când este apăsat.
const button = document.querySelector("button");
const heading = document.querySelector("h2");
const originalHeadingText = heading.textContent;
button.addEventListener("click", () => {
    if (heading.textContent === originalHeadingText) {
        heading.textContent = "I TOLD YOU TO NOT CLICK THE BUTTON!";
        button.textContent = "Now revert to see the meme";
    } else {
        heading.textContent = originalHeadingText;
        button.textContent = "DO NOT CLICK";
    }
});

// 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const inputField = document.querySelector("input");
const outputParagraph = document.getElementById("output-text");
const txtParagraph = document.createElement('p');
outputParagraph.appendChild(txtParagraph);

inputField.addEventListener("input", () => {
    if (inputField.value === "Cristi Crudu" || inputField.value === "cristi") {
        txtParagraph.textContent = "Чёрный список: " + inputField.value;
    } else {
        txtParagraph.textContent = inputField.value;
    }
});

// 5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.
const list1 = document.getElementById("another-list");
const childParagraph = document.getElementById("new_orphans");
const firstItem = list1.firstElementChild.textContent;
const lastItem = list1.lastElementChild.textContent;
childParagraph.textContent = `First Item: ${firstItem} \nLast Item: ${lastItem}`;

// 5.10 Alternați o clasă active pe un element atunci când este apăsat un buton.
const toggleButton = document.getElementById("toggle-class-btn");
const element = document.getElementById("element");

toggleButton.addEventListener("click", () => {
    element.classList.toggle("active");
});

// 5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.
const table = document.createElement("table");
for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
        let cell = document.createElement("td");
        cell.textContent = `Celula${j + 1}`;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
const tabel = document.getElementById("tabel");
tabel.textContent = "Tabelul minunat care m-a torturat :,)";
tabel.appendChild(table);

// 5.12 Creați o listă <ul> și adăugați elemente noi la apăsarea unui buton.
const addButton = document.getElementById("add-item-btn");
const list = document.getElementById("dynamic-list");

addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.textContent = "I wanna sleep ... zzzzzzzzz";
    list.appendChild(newItem);
});
