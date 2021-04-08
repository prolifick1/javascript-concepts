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

let writeData = 'hello world';
let writableStream = fs.createWriteStream(`${__dirname}/output.txt`);
writableStream.write(writeData, 'utf8');
writableStream.end();
writableStream.on('finish', function() {
  console.log('write completed');
})