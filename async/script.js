function makeRequest(location) {
  return new Promise(function(resolve, reject) {
    if(location === 'Google') {
      console.log(`Making request to ${location}`);
      
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  })
}

function processRequest(response) {
  return new Promise(function(resolve, reject) {
    console.log('procesing response');
    resolve(`Extra information + ${response}`)
  })
}

// makeRequest('Google').then(function (response) {
//   console.log(`response was received`);
//   return processRequest(response);

// }).then(function (processedResponse) {
//   console.log(processedResponse);
// }).catch(function (err) {
//   console.log(err);
// })

async function doWork() {
  const response = await makeRequest('Google');
  console.log('Response Received');
  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}

doWork();