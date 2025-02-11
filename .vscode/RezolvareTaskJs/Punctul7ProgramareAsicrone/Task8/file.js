// ### 7.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Help',
      body: 'HelpHelpHelp',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));