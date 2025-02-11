// 2. Funcții
// ### 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
// ### 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.
// ### 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
// ### 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
// ### 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
// ### 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
// ### 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 


//2.1
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
//2.2
function calcAriaDreptunghi(L,l=1){
    return L*l;
}
console.log(calcAriaDreptunghi(6))
//2.3
const a=function(n){
    return n*n;
}
console.log(a(6))

//2.4
function StringRevers(string){
   return string.split("").reverse().join("").toUpperCase();
}
console.log(StringRevers("asd"))

//2.5
function dublu(a){
    return a*a;
};
function patrat(a){
    return a*a*a;
}

function withTwoFunctionInside(functie1,functie2,numb){
    const rez={
        dublul :dublu(numb),
        patratul: patrat(numb)
    }
    return rez;
}
let rez = withTwoFunctionInside(dublu, patrat, 2);
console.log("Dublul va fi:", rez.dublul); 
console.log("Patratul va fi:", rez.patratul); 

//2.6
sum=(a,b)=>{console.log("Suma va fi:"+ (a+b))}
let summ=sum(3,4)


//2.7

const functiaCarevaA=(num)=>{
    return num*num;
}
const functiaDoi=(arr)=>{
    for(let elem of arr){
        console.log(functiaCarevaA(elem))
    }
}
const arr=[1,2,3,4,5]
functiaDoi(arr)

