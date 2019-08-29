

let request = require('request');

let input = process.argv.slice(2);

let searchTerm = input[0];

// var whichCat = fucntion () {
  
//   for (let key in data[0]) {
//     if (key !== searchTerm) {
//       console.log("requested breed is not found")
//     } else {


//     }
//   }
// }
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + searchTerm;

request(url, function(error, response, body) {
  console.log('error:You broke the URL', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

 



  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("requested breed is not found");
  } else {
    console.log(data[0].description);
  }
});