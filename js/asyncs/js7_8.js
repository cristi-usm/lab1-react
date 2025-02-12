// 7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
console.log("Cristi, macar la memes uitate adaca pana acum nu ti-a placut nimic ... :,(")
fetch("https://api.imgflip.com/get_memes")
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error(`Eroare la request: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success && data.data && data.data.memes) {
            const memes = data.data.memes;
            memes.forEach(meme => {
                console.log(meme.name +"    "+ meme.url);
            });
        } else {
            console.error("No more memes :,(.");
        }
    })
    .catch(error => {
        console.error("NOT WORKING :", error);
    });
