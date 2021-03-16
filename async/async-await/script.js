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

