// 7.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.let counter = 1;
const cronometru = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter > 5) {
        clearInterval(cronometru);
        console.log("Stopwatch after 5 sec.");
    }
}, 1000);