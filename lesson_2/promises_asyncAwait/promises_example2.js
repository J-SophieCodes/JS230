const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

Promise.all([             // all promises are run asynchronously
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {   // will wait til all promises are settled; messages is an array of all resolves
  console.log(messages);
});

Promise.race([            // all promises are run asynchronously
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {   // will return as soon as one promise is settled; message is just one resolve from one of the promises
  console.log(message);
});