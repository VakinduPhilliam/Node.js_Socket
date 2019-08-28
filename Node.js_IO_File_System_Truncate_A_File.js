// Node.js File System Truncate a File

// Truncate a File
// Syntax:
// The following is the syntax of the method to truncate an opened file:

fs.ftruncate(fd, len, callback)

// Parameters:
// Here is the description of the parameters used:
// fd - This is the file descriptor returned by fs.open().
// len - This is the length of the file after which the file will be truncated.
// callback - This is the callback function. No arguments other than a possible exception
// are given to the completion callback.
//

// 
// Example:
//

// Let us create a js file named main.js having the following code:

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");

fs.open('input.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened successfully!");
   console.log("Going to truncate the file after 10 bytes");
   
   // Truncate the opened file.
   fs.ftruncate(fd, 10, function(err) {

      if (err) {

         console.log(err);

      } 

      console.log("File truncated successfully.");
      console.log("Going to read the same file"); 
      
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){

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
});


// Now run the main.js to see the result -
// $ node main.js

//
// OUTPUT:
// 
// “Going to open an existing file
// File opened successfully!
// Going to truncate the file after 10 bytes
// File truncated successfully.
// Going to read the same file”
//
// “Tutorials 
//
// File closed successfully.”
//

