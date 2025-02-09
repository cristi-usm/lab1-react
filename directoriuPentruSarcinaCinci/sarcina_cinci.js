// 5.1
const h1Elem = document.getElementById('elem')
h1Elem.textContent = "Hello"

// 5.2
const toateLi = document.querySelectorAll('li')
toateLi.forEach(el => el.style.color = 'red');

// 5.3
const container = document.getElementById('container')
const text = document.createElement("p")
text.textContent = "Some text"

container.appendChild(text)

// 5.4
const image = document.getElementById('imagine')
image.src = "images/js_logo.png"

// 5.5
const box = document.getElementById('box')
box.classList.add('className')

// 5.6
const removeMe = document.getElementById('removeMe')
removeMe.remove()

// 5.7
const h2Text = document.getElementById('h2Text')
const changeBtn = document.getElementById('text_changer')

changeBtn.addEventListener('click', e => {
    e.preventDefault()
    h2Text.textContent = Math.floor(Math.random() * 10) + 1
})

// 5.8
const textInput = document.getElementById('textul')
const textLooker = document.getElementById('textulMonotorizat')

textInput.addEventListener('keydown', e => {
    textLooker.textContent = textInput.value
})

// 5.9
const listaCopii = document.getElementById('listaCuCopii')
console.log(listaCopii.children[0].textContent)
console.log(listaCopii.children[listaCopii.children.length - 1].textContent)

// 5.10
const vaExista = document.querySelector('.alterna')
const classBtn = document.getElementById('classChanger')

classBtn.addEventListener('click', e => {
    e.preventDefault()
    const result = vaExista.classList.toggle("ceva")
    vaExista.textContent = `${result ? "Aprins" : "Strins"}`
})

// 5.11
const tableContainer = document.getElementById('tableContainer')
const table = document.createElement('table')

for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr')

    const td1 = document.createElement('td')
    const td2 = document.createElement('td')

    const text1 = document.createTextNode('Text1')
    const text2 = document.createTextNode('Text2')

    td1.appendChild(text1)
    td2.appendChild(text2)
    tr.appendChild(td1)
    tr.appendChild(td2)

    table.appendChild(tr)
}

tableContainer.appendChild(table)

// 5.12
const lista = document.getElementById('listaFaraSurpriza')
const btn = document.getElementById('butonCuSurpriza')

btn.addEventListener('click', e => {
    e.preventDefault()
    const punct = document.createElement("li")
    punct.textContent = "punct"
    lista.appendChild(punct)
})