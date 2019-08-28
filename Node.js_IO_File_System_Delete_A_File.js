// Node.js File System Delete a File

// Delete a File
// Syntax:
// The following is the syntax of the method to delete a file:

fs.unlink(path, callback)

//
// Parameters:
// Here is the description of the parameters used:
// path - This is the file name including path.
// callback - This is the callback function. No arguments other than a possible exception
// are given to the completion callback.
//

//
// Example:
//

// Let us create a js file named main.js having the following code:

var fs = require("fs");

console.log("Going to delete an existing file");

fs.unlink('input.txt', function(err) {

   if (err) {

      return console.error(err);

   }

   console.log("File deleted successfully!");

});


// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//
// “Going to delete an existing file
// File deleted successfully!”
//

