function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}


// using promises

makeRequest('Google').then(response => {
  console.log('Response Received');
  return processRequest('response');
}).then(processedResponse => {
  console.log(processedResponse);
}).catch(err => {
  console.log(err);
});


// using async and await

async function doWork() {
  try {
    const response = await makeRequest('Google');   // await keyword tells JS to continue running other code until a value is returned from the promise
    console.log('Response Received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();