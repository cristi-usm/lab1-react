// 2.1

function sumaElemente(a, b) {
    return a + b
}

// 2.2

function arieDreptunghi(latime, lungime = 1){
    return latime * lungime
}

// 2.3 

const anonimSquare = (a) => {
    return a * a
} 

// 2.4

function upperLenght(text){
    upperText = text.toUpperCase()
    return upperText.lenght
}

// 2.5

const dublu = (num) => num * 2
const patrat = (num) => num * num
function returnFuntions(num){
    return  `dublubl: ${dublu(num)} si patratul: ${patrat(num)}`
}

// 2.6

const arrowSum = (a, b) => a + b

//2.7

function adunareWith1(num){
    return num + 1
}

function adunarePerArray(arr, adunareWith1){
    let rezult = []
    for(let el of arr){
        rezult.push(adunareWith1(el))
    }
    return rezult
}
