//7. Programare Asincronă
//7.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(()=>{
    console.log("Mesajul se afiseaza dupa 3 secunde")
},3000)


//7.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.
    s=1;
    for(i=0;i<5;i++){
          setTimeout(()=>{
            console.log(s++)
    },i*1000)  
    }

//7.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
const salut = (callback)=>{
    console.log("Salut")
    callback()
}
const nume = ()=>{
    console.log("Ion")
}
salut(nume)

//7.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
function promise4() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise de 2 secunde")
        reject("Eroare");
      }, 2000); 
    });
  }
  
  promise4().then((mesaj) => {
    console.log(mesaj); 
  });
  
  //7.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
  function promise5(par) {
    return new Promise((resolve, reject) => {
      if (par === 1) {
        resolve("Rezolvat");
      } else {
        reject("Respins");
      }
    });
  }
  
  promise5(1)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.log(reject); 
    });
  
  //7.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.
async function call4() {
    try {
        const succes = await promise4(1);
        console.log("A mers promise 7.4",succes);
      } catch (error) {
        console.log(error);
      }
 
}
call4()

//7.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
function salutul() {
    return new Promise((resolve, reject) => {
        resolve("Salut");
    });
  }
  
  function numePersoana() {
    return new Promise((resolve, reject) => {
        resolve("Ion");
    });
  }
  
  function intrebare() {
    return new Promise((resolve, reject) => {
        resolve("Cum la tine?");
    });
  }
  
  salutul()
    .then((result) => {
      console.log(result); 
      return numePersoana(); 
    })
    .then((result) => {
      console.log(result); 
      return intrebare();
    })
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.log("A apărut o eroare:", error); 
    });

    //7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    });

//7.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.
Promise.all([promise4, promise5])
  .then(raspuns => {
    console.log('Ambele promisuri au mers!');
    console.log(raspuns); 
  })
  .catch(error => {
    console.error('A apărut o eroare:', error);
  });


  Promise.allSettled([promise4, promise5])
  .then(results => {
    console.log('Rezultatele tuturor promisiunilor:', results);
  });
