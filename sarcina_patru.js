// 4.1
console.log("<--- --- --- Sarcina 4.1 --- --- --->")
const arrOrase = ["Sri Jayawardenepura Kotte", "Manila", "Federal Territory of Kuala Lumpur"]

console.log(arrOrase[0])
console.log(arrOrase[arrOrase.length - 1])

// 4.2
arrOrase.unshift("Phnom Penh")
arrOrase.push("Hanoi")

arrOrase.pop()

// 4.3
console.log("<--- --- --- Sarcina 4.3 --- --- --->")
const arrCulori = ["blue", "red", "yellow"]

for (let i = 0; i < arrCulori.length; i++) {
    console.log(arrCulori[i])
}

// 4.4
console.log("<--- --- --- Sarcina 4.4 --- --- --->")
const arrAnimal = ["Rabbit", "Elephant", "Dolphin"]

arrAnimal.forEach(animal => console.log(animal))

// 4.5
console.log("<--- --- --- Sarcina 4.5 --- --- --->")
const arrNumbers = []
for (let i = 0; i < 10; i++) {
    arrNumbers.push(Math.floor(Math.random() * 20) + 1)
}

const newArrNumbers = arrNumbers.filter(el => el > 10)
console.log(newArrNumbers)

// 4.6
console.log("<--- --- --- Sarcina 4.6 --- --- --->")
const arrNumbersToBeSorted = []
for (let i = 0; i < 10; i++) {
    arrNumbersToBeSorted.push(Math.floor(Math.random() * 100) + 1)
}

arrNumbersToBeSorted.sort((a, b) => a - b)
console.log(arrNumbersToBeSorted)

// 4.7
console.log("<--- --- --- Sarcina 4.7 --- --- --->")
const arrNumbersToBePowered = []
for (let i = 0; i < 10; i++) {
    arrNumbersToBePowered.push(Math.floor(Math.random() * 10) + 1)
}

const arrNumbersPowered = arrNumbersToBePowered.map(el => Math.pow(el, 2))
console.log(arrNumbersPowered)

// 4.8
console.log("<--- --- --- Sarcina 4.8 --- --- --->")
const arrNumbersToBeReduced = [1, 2, 3]

console.log(arrNumbersToBeReduced.reduce((acc, el) => acc + el, 0))

// 4.9
console.log("<--- --- --- Sarcina 4.9 --- --- --->")
const arrNumbersToBeVerified = [1, 2, 3]

console.log(arrNumbersToBeVerified.includes(2))
console.log(arrNumbersToBeVerified.indexOf(3))

// 4.10
console.log("<--- --- --- Sarcina 4.10 --- --- --->")
const arrCuv1 = ["unu", "doi", "trei"]
const arrCuv2 = ["patru", "cinci", "sase"]

const arrCuv3 = arrCuv1.concat(arrCuv2)
const arrCuv4 = [...arrCuv1, ...arrCuv2]
console.log(arrCuv3)
console.log(arrCuv4)

// 4.11
console.log("<--- --- --- Sarcina 4.11 --- --- --->")
const biArray = [[1, 2], [3, 4]]

console.log(biArray[0][1])

// 4.12
console.log("<--- --- --- Sarcina 4.12 --- --- --->")
const arrWithDuplicates = [1, 3, 6, 2, 1, 3, 9, 4]

// dacă de făcut fără funcție :(
const setWithNoDuplicates = new Set(arrWithDuplicates)
console.log(setWithNoDuplicates)

// dacă de făcut cu funcție
const removeDuplicates = (arr) => {
        // indexOf returnează index doar la primul element ce a găsit și nu la următoarul (așa el "ignora" următoare apariții la elemente). 
        // Presupun Alexandru ține minte anul trecut cât timp m-am jucat când prima dată am văzut indexOf :)
    return arr.filter((el, index) => arr.indexOf(el) === index) 
}
console.log(removeDuplicates(arrWithDuplicates))

// 4.13
console.log("<--- --- --- Sarcina 4.13 --- --- --->")
const arr = [1, 3, 6, 2, 1, 3, 9, 4, 8]

const slicedArray = arr.slice(2, 7)
console.log(slicedArray)

arr.splice(2, 1) // am scos 6
console.log(arr) 