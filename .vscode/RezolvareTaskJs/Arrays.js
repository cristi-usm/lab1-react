// ## 4. Array-uri
// ### 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
// ### 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
// ### 4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
// ### 4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
// ### 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
// ### 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
// ### 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.
// ### 4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
// ### 4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
// ### 4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
// ### 4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.
// ### 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
// ### 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.


//4.1
let city=["Moscow","Chisinau","Washington DC"]
console.log(city[0])
console.log(city[city.length-1])
//4.2
city.unshift("London")//de la inceput
let add_var=["AAA" , ...city] //inceput
console.log(add_var)
city.push("Roma")//sfarsit
console.log(city)
city.pop()
console.log(city)



//4.3
const colorArray=["white","glue","green","yellow","black","blue"]
for(let i=0;i<colorArray.length;i++){
    console.log(colorArray[i])
}

//4.4
const animal =["peste","pisica","caine","broasca","iepure"]
animal.forEach(element => {
    console.log("Ce animalut extraordina este:"+  element)
});

//4.5
const arrayWithNumber =[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17]
for(let i=0;i<arrayWithNumber.length;i++){
    if(i>10){
        console.log(`Numarul: ${arrayWithNumber[i]} ,este mai mare ca 10 `)
    }
}

function aaa(number){
    return number >10
}
//4.1.5  prin filter
let listWithNumbersFilter= arrayWithNumber.filter(aaa)
console.log(listWithNumbersFilter)


//4.6
const arraySortCrescator =[10,4,6,2,12,21,1,2,0,2,100,0.001]
console.log(arraySortCrescator.sort((a,b)=>a-b))

//4.7
const ArrayForMap=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(ArrayForMap.map((a)=> a*a))

//4.8
console.log("Suma numerele din array este: "+ arraySortCrescator.reduce((acc,currentValue)=>acc+currentValue,0));

//4.9
if(ArrayForMap.includes(2)){
    console.log("Cu metoda includes numarul se contine in array")
}else{
    console.log("Cu metoda includes numarul nu se include  in array")

}

if(ArrayForMap.indexOf(1)>-1){
    console.log("Cu metoda indexOf numarul se contine in array")
}else{
    console.log("Cu metoda indexOf numarul  nu se contine in array")
}

//4.10
const arrOne =["aaa","bbb","ccc"]
const arrTwo=["ddd","eee","fff"]
let result=arrOne.concat(arrTwo)
let resultTwo=[...arrOne,...arrTwo]
console.log(result)
console.log(resultTwo)

//4.11
const bidimensionalArray=[[1,2]
                        ,[3,4]]
console.log(bidimensionalArray[1][1])


//4.12
const arrDublicate=["aaa","bbb","ccc","aaa","bbb","gggg","mmm","tyty","bbb"];
function removeDublicate(arr){
    return arr.filter((value,index)=>arr.indexOf(value)===index) 
}
console.log(removeDublicate(arrDublicate))

//4.13
const sliceArray=arrDublicate.slice(4);//de la index 4
console.log(sliceArray)

//4.14

arrDublicate.splice(2,1);
console.log("Dupa eliminarea elementului cu index 2:", arrDublicate)

//slice(start, end)-returneaza o sublista , splice(index, numărElemente)- elimina elemente din lista 