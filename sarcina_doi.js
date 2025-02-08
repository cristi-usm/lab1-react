// 2.1
const suma = (num1, num2) => {
    return num1 + num2
}

// 2.2
const aria = (num1) => {
    return num1 * 1
}

// 2.3
const functieAnonima = (num) => {
    return Math.pow(num, 2)
}


// 2.4
const upper_string = (str) => {
    return str.toUpperCase().length()
}

// 2.5
const dublu_numar = (num) => {
    return num * 2
}

const patratNumar = (num) => {
    return Math.pow(num, 2)
}

const functiePrincipala = (num) => {
    return {"dublu": dubluNumar(num), "patrat": patratNumar(num)}
}

// 2.6
const sumaNoua = (num1, num2) => {
    return num1 + num2
}

// 2.7
const altaFunctie = (num) => {
    return num + 1
}

const functie = (arr) => {
    for (const element of arr) {
        altaFunctie(element)
    }
}