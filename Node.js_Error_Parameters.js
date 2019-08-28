// Node.js Error parameters

// In Node Application, any async function accepts a callback as the last parameter and a
// callback function accepts an error as the first parameter. 

// Create a text file named input.txt with the following content.

// “Node.js self learning content to teach the world in a simple and easy
// way!!!!!”

// Create a js file named main.js having the following code -


var fs = require("fs");

fs.readFile('input.txt', function (err, data) {

   if (err) {

      console.log(err.stack);
      return;

   }

   console.log(data.toString());

});

console.log("Program Ended");


// Here fs.readFile() is a async function whose purpose is to read a file. 

// If an error occurs during the read operation, then the err object will contain the
// corresponding error, else data will contain the contents of the file. 

// readFile passes err and data to the callback function after the read operation is
// complete, which finally prints the content.

// “Program Ended
// Node.js giving self learning content to teach the world in a simple and easy 
// way!!!!!”

