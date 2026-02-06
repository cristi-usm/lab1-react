// 5.1

const titlu = document.getElementById("titlu-principal")
titlu.textContent = "Hello mir, Manera krutit mir!!!"

// 5.2

const itemeLista = document.querySelectorAll("li")
itemeLista.forEach(li => {
    li.style.color = "blue"
});

// 5.3

const container = document.getElementById("container");
const paragrafNou = document.createElement("p");
paragrafNou.textContent = "Acesta este un paragraf adăugat dinamic.";
container.appendChild(paragrafNou);

// 5.4

const btnImagine = document.getElementById("btn-imagine")
        btnImagine.addEventListener("click", () => {
            const imagine = document.querySelector("img")
            imagine.src = "https://picsum.photos/150"
        })

// 5.5

const cutie = document.getElementById("box")
        cutie.classList.add("highlight")

// 5.6

const deSters = document.querySelector("p")
        if (deSters) deSters.remove()

// 5.7

const butonH2 = document.getElementById("btn-schimba")
        const subtitlu = document.querySelector("h2")
        butonH2.addEventListener("click", () => {
            subtitlu.textContent = "Textul a fost schimbat cu succes!"
        })

// 5.8

const input = document.getElementById("nume-input")
        const afisaj = document.getElementById("output")
        input.addEventListener("input", (e) => {
            afisaj.textContent = e.target.value
        })

// 5.9

const listaUl = document.getElementById("lista-mea")
        console.log("Primul copil (5.9):", listaUl.firstElementChild.textContent)
        console.log("Ultimul copil (5.9):", listaUl.lastElementChild.textContent)

// 5.10

const butonToggle = document.getElementById("toggle-btn")
        const elementMeniu = document.querySelector(".meniu")
        butonToggle.addEventListener("click", () => {
            elementMeniu.classList.toggle("active")
        })

// 5.11

function genereazaTabel() {
            const tabel = document.createElement("table")
            for (let i = 0; i < 3; i++) {
                let rand = tabel.insertRow()
                for (let j = 0; j < 2; j++) {
                    let celula = rand.insertCell()
                    celula.textContent = `R${i+1} C${j+1}`
                }
            }
            document.body.appendChild(tabel)
        }

// 5.12

const btnAdauga = document.getElementById("add-item")
        const listaDinamica = document.getElementById("lista-dinamica")
        btnAdauga.addEventListener("click", () => {
            const li = document.createElement("li")
            li.textContent = `Element adăugat la ${new Date().toLocaleTimeString()}`
            listaDinamica.appendChild(li)
        })