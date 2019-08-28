// Node.js File System Closing a File

// Closing a file
// Syntax:

// The following is the syntax to close an opened file:

fs.close(fd, callback)

// Parameters:
// Here is the description of the parameters used -
// fd - This is the file descriptor returned by file fs.open() method.
// callback - This is the callback function. No arguments other than a possible exception
// are given to the completion callback.

//
// Example:
//

// Let us create a js file named main.js having the following code -

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");

fs.open('input.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {

      if (err) {

         console.log(err);

      }

      // Print only read bytes to avoid junk.
      if(bytes > 0) {

         console.log(buf.slice(0, bytes).toString());

      }

      // Close the opened file.
      fs.close(fd, function(err) {

         if (err) {

            console.log(err);

         } 

         console.log("File closed successfully.");

      });
   });
});


//
// Now run the main.js to see the result:
// $ node main.js

// 
// OUTPUT:
// 
// “Going to open an existing file
// File opened successfully!
// Going to read the file
//
// Tutorials Point is giving self learning content to teach the world in simple and easy 
// way!!!!!
//
// File closed successfully.”
//
