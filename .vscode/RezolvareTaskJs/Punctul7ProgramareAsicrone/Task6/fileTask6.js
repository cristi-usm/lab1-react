// ### 7.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.

function waitLoadScripSalut(src,callback){
    let script=document.createElement("script");
       script.src=src;
       
       script.onload=()=>callback(script);
       document.head.append(script);
      
   }
   waitLoadScripSalut("../Task4/fileTask4.js",function(){
       Task4();
     //  console.log("Se incarca fisierul de la task 4");
      
   })


