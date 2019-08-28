// Node.js File System Reading a File

// Reading a File
// Syntax:
// The following is the syntax of one of the methods to read from a file:

fs.read(fd, buffer, offset, length, position, callback)

// This method will use file descriptor to read the file. 
// If you want to read the file directly using the file name, then you should use another
// method available.

// Parameters:
// Here is the description of the parameters used -
// fd - This is the file descriptor returned by fs.open().
// buffer - This is the buffer that the data will be written to.
// offset - This is the offset in the buffer to start writing at.
// length - This is an integer specifying the number of bytes to read.
// position - This is an integer specifying where to begin reading from in the file. If
// position is null, data will be read from the current file position.
// callback - This is the callback function which gets the three arguments, 
// (err, bytesRead, buffer).
//

//
// Example:
//

// Let us create a js file named main.js with the following code:

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");

fs.open('input.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){

      if (err){

         console.log(err);

      }

      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.

      if(bytes > 0){

         console.log(buf.slice(0, bytes).toString());

      }
   });
});


// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//
// “Going to open an existing file
// File opened successfully!”
//

// “Going to read the file
// 97 bytes read
//
// Tutorials Point is giving self learning content to teach the world in simple and easy
// way!!!!!”
//

