// 2.1
const suma = (num1, num2) => {
    return num1 + num2
}

// 2.2
const aria = (num1) => {
    return num1 * 1
}

// 2.3
const functie_anonima = (num) => {
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

const patrat_numar = (num) => {
    return Math.pow(num, 2)
}

const functie_principala = (num) => {
    return {"dublu": dublu_numar(num), "patrat": patrat_numar(num)}
}

// 2.6
const suma_noua = (num1, num2) => {
    return num1 + num2
}

// 2.7
const alta_functie = (num) => {
    return num + 1
}

const functie = (arr) => {
    for (const element of arr) {
        alta_functie(element)
    }
}