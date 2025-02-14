//3. Obiecte
//3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.
const masina = {
    marca:"Toyota",
    model:"Land Cruiser 200",
    an:1999
  }
  //3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
  console.log(masina.marca , masina.model)
  console.log(masina["marca"] , masina["model"])
  
  //3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.
  masina.culoare = "negru"
  masina.an = 2004
  console.log(masina)
  
  //3.4 Ștergeți proprietatea model din obiect.
  delete masina.model
  console.log(masina)
  
  //3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
  for (const key in masina) {
    console.log(key,masina[key])
  }
  
  //3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină
  masina.descriere = ()=>{
    return console.log(`Masina de marca ${masina.marca}, anul ${masina.an} si culoarea ${masina.culoare}`)
  }
  masina.descriere()
  
  //3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
  const persoana = {
    nume:"Varvara",
    varsta:23
  }
  function salutPersoana(persoana){
    return console.log(`Salut ${persoana.nume}, ai ${persoana.varsta} de ani.`)
  }
  salutPersoana(persoana)
  
  //3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
  if ("culoare" in masina) {
    console.log("Obiectul are proprietatea culoare");
  } else {
    console.log("Obiectul nu are proprietatea culoare");
  }
  
  //3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
  const casa = {
    adresa:{
      strada:"Grigore Vieru 14",
      oras:"Chisinau"
    }
  }
  
  //3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
  function student(name,age,grade){
    return {
      nume:name,
      varsta:age,
      nota:grade
    }
  }
  console.log(student("Sorin","20",10))
  
  //3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.
  Object.assign(persoana,masina)
  console.log(persoana)
  
  const proprietar = {...persoana,...casa}
  console.log(proprietar)
  
  //3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
  const calculator = {
    adunare:(a,b)=>{
      return a+b
    },
    scadere:(a,b)=>{
      return a-b
    },
    inmultire:(a,b)=>{
      return a*b
    },
    impartire:(a,b)=>{
      return a/b
    }
  }
  //3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
  const {marca,an} = masina
  console.log(marca)
  