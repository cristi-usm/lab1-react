// 7.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function  salut(callfn){
    console.log("Please call the other function ... ");
    callfn();
}
salut(()=>{console.log("I hate this")});
