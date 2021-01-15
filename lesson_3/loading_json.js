// load json via JSON.parse
let request = new XMLHttpRequest();
request.open('GET', 'http://ls-230-book-catalog.herokuapp.com/invalid_book');

request.addEventListener('load', event => {
  try {
    let data = JSON.parse(request.response);
    // do something with the data
  } catch(e) {
    console.log('Cannot parse the received response as JSON.')
  }
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();

// load json via responseType
let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  // request.response will be the result of parsing the JSON response body
  // or null if the body couldn't be parsed or another error
  // occurred.

  let data = request.response;
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();