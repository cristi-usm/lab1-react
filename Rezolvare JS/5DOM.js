//5. Manipulări DOM
//5.1 Selectați un element <h1> dintr-un document HTML folosind getElementById și schimbați textul acestuia.
document.getElementById('salut').innerHTML = "Buna ziua!"

//5.2 Selectați toate elementele <li> dintr-un document folosind querySelectorAll și schimbați culoarea textului.
document.querySelectorAll("li").forEach(item => {
  item.style.color = "red";
});

//5.3 Creați un element <p>, adăugați un text în acesta și introduceți-l la sfârșitul unui element <div> cu ID-ul container.
const p = document.createElement("p")
p.innerHTML = "Azi e joi"

const container = document.getElementById("container")
container.appendChild(p)

//5.4 Selectați o imagine și schimbați valoarea atributului src.
const img = document.getElementById("wallpaper").setAttribute("src","https://images.wallpaperscraft.com/image/single/origami_plane_art_128345_1280x720.jpg")

//5.5 Adăugați o clasă nouă unui element cu ID-ul box.
document.getElementById("box").setAttribute("class","cutie")

//5.6 Eliminați un element <p> dintr-un document.
document.getElementById("slogan").remove()

//5.7 Adăugați un eveniment click unui buton, astfel încât să schimbe textul unui <h2> când este apăsat.
const schimbaculoarea = ()=>{
  document.getElementById("text").style.color = "red"
} 
document.getElementById("comanda-btn").addEventListener("click", schimbaculoarea);

//5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
textInput.addEventListener("input", function () {
  textOutput.textContent = textInput.value;
});

//5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.
const ulElement = document.getElementById("list")
const firstChild = ulElement.firstElementChild.textContent;
const lastChild = ulElement.lastElementChild.textContent;

const paragraf = document.getElementById("afisare");
paragraf.textContent = `Primul element: ${firstChild}, Ultimul element: ${lastChild}`;

//5.10 Alternați o clasă active pe un element atunci când este apăsat un buton.
const element = document.getElementById("element-neactiv");
const button = document.getElementById("activ");

button.addEventListener("click", () => {
  element.classList.toggle("active");
});

//5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.
const table = document.createElement("table");
table.border = "1";

for (let i = 0; i < 3; i++) {
  const row = document.createElement("tr"); 

  for (let j = 0; j < 2; j++) {
    const cell = document.createElement("td");
    cell.textContent = "Celula"
    row.appendChild(cell); 
  }

  table.appendChild(row); 
}
container.appendChild(table)

//5.12 Creați o listă <ul> și adăugați elemente noi la apăsarea unui buton.
const menuList = document.getElementById("coffe-menu")
const inputMenu = document.getElementById("input-menu")
const addMenu = document.getElementById("adauga-menu")

addMenu.addEventListener("click",()=>{
  const valoareInput = inputMenu.value
  const menuItem = document.createElement("li")
  menuItem.textContent = valoareInput
  menuList.appendChild(menuItem)
})
