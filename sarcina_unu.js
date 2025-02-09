// 1.1
var nr
let str = "String"
const bool = true

// 1.2
const primaFunctie = (str) => {
    return typeof(str)
}

// 1.3
let str1 = Number("123")
let str2 = Number("456")

let nr1 = toString(str1)
let nr2 = toString(str2)

// 1.4
let nume = "Andrei"
let varsta = 25

let propozitie = `Nume: ${nume}, Varsta: ${varsta}`

// 1.5
let testVarsta = varsta > 18 ? "Batran" : "Tanar"

// 1.6
let unexistent = (obj, num) => {
    if (obj === null) {
        console.log("Obj este null")
    } else if(num == undefined){
        console.log("Num este undefined")
    }
}

// 1.7
const obj = {
    "nume": "Valeriu",
    "o_varsta": 12,
    "o_verificare": false
}

// 1.8
const arr = [23, "familie", false, {obj: "Victoras"}, ['v', 'i', 'c', 't', 'o', 'r', 'a', 's']]

arr.forEach(element => {
    console.log(typeof(element))
});








