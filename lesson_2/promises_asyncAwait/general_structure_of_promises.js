// source: https://launchschool.com/gists/58925b8e
// general structure of promises

let p = newPromise((resolve, reject) => {
  let a = 1 + 1;

  if (a === 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is in the then ' + message);
}).catch((message) => {
  console.log('This is in the catch ' + message);
});