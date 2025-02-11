function Task4(){
return new Promise(function(resolve,reject){
  setTimeout(()=>resolve(console.log("Functie cu promise")),2000);

})
}
