const args = process.argv.slice(2, 4);
const fs = require('fs');
const request = require('request');

let url = args[0];// url inputed into node 'http://www.example.edu/'
let path = args[1];// path inputed into node './index.html' 

request(url, (error, response, body) => {
  console.log('statusCode:', response.statusCode); // Print the response status code
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(error);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});