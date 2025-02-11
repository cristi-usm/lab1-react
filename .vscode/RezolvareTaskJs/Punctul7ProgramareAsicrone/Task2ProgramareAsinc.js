// ### 7.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
 const miniCronometru=(n)=>{
   counter=1
   interval=setInterval(()=>{
    console.log(counter)
    counter++;
    if(counter>n){
        clearInterval(interval)
    }
   },1000)
 }
 miniCronometru(5);