// Node.js File System Writing a File

// Creating a file, Writing to it, and Reading from it
// Syntax:
// The following is the syntax of one of the methods to write into a file -

fs.writeFile(filename, data[, options], callback)

// 
// NOTE:
// This method will over-write the file if the file already exists. 
// If you want to write into an existing file then you should use another method 
// available.
//

// Parameters:
// Here is the description of the parameters used:
// path - This is the string having the file name including path.
// data - This is the String or Buffer to be written into the file.
// options - The third parameter is an object which will hold {encoding, mode, flag}. By // default, encoding is utf8, mode is octal value 0666, and flag is 'w'
// callback - This is the callback function which gets a single parameter err that returns
// an error in case of any writing error.
//

//
// Example:
//
// Let us create a js file named main.js having the following code -
//

var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {

   if (err) {

      return console.error(err);

   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('input.txt', function (err, data) {

      if (err) {

         return console.error(err);

      }

      console.log("Asynchronous read: " + data.toString());

   });
});


//
// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//
// “Going to write into existing file
// Data written successfully!”

// Let's read newly written data, Open file input.txt
// It reads:
//
// “Asynchronous read: Simply Easy Learning!”

