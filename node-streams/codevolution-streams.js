let fs = require('fs');
let path = require('path');

let readableStream = fs.createReadStream(`${__dirname}/input.txt`);
let data = '';

readableStream.on('data', function(chunk) {
  data += chunk;
});

readableStream.on('end', function() {
  console.log(data);
})