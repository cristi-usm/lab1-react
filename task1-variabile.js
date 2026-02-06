// 1.1
var a = 3
let b = "String"
const c = true

// 1.2

function typeFunct(s){
    return typeof s
}

// 1.3

let a1 = 123
let a2 = String(a1)
let a3 = parseInt(a2)

// 1.4

let nume = "Radu"
let varsta = 21

console.log(`Salut, sunt ${nume} si am ${varsta} ani! `)

// 1.5

let v1 = 1
let v2 = 3

let temp = v2
v2 = v1
v1 = temp

// 1.6

function nullOrUndefined (s){
    if(s === null || s === undefined){
         console.log("yes")
    }
}

// 1.7
obj = {
    'age': 21,
    'name': "Radu",
    'stundent': true
}

obj.age = 22
const newSt = "da"
obj[newSt] = "da"
delete obj.stundent

// 1.8

const array = [12, "da", true, 15.2, null]

for(let i = 0; i < array.length; i++){
    console.log(typeof array[i])
}