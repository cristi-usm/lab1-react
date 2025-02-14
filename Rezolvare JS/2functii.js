//2. Funcții
//2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function sum(par1,par2){
    return console.log(par1+par2)
  }
  sum(5,9)
  
  //2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.
  function aria(lungime,inaltime = 1){
    return console.log(inaltime*lungime)
  }
  aria(4)
  //2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
  const patrat = function(a){
    return console.log(a*a)
  }
  patrat(8)
  //2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
  function stringUpCount(string){
      console.log("String-ul uppercase:",string.toUpperCase(),"Numarul de caractere:",string.length)
  }
  stringUpCount("aloe")
  //2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
  function main(numar){
    const dublul =(numar)=>{
      return numar*2
    }
    const patrat =(numar)=>{
      return numar*numar
    }
    return console.log({
      dublul:dublul(numar),
      patrat:patrat(numar)
    })
    }
  
  
  main(5)
  
  //2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
  const suma = (a,b)=>{
    return a+b
  }
  sum(2,5)
  //2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.
  function externFunction(array){
      
    for(i=0;i<array.length;i++){
      returnType(array[i])
    }
  }
  externFunction(["123",123,null,undefined,true])