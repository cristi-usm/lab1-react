// ### 7.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function waitLoadScripSalut(src,callback){
 let script=document.createElement("script");
    script.src=src;
    
    script.onload=()=>callback(script);
    document.head.append(script);
   
}
waitLoadScripSalut("Fisier1.js",function(){
    console.log("aaaaaaa");
    Salut();
})


