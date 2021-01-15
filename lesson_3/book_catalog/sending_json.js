let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

let data = { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' };
let json = JSON.stringify(data);

request.send(json);

request.addEventListener('load', () => {
  if (request.status === 201) {
    console.log(`This book was added to the catalog: ${request.responseText}`);
  }
});