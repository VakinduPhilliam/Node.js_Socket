// Node.js File System Create a Directory

// Create a Directory
// Syntax:
// The following is the syntax of the method to create a directory:

fs.mkdir(path[, mode], callback)

// Parameters:
// Here is the description of the parameters used:
// path - This is the directory name including path.
// mode - This is the directory permission to be set. Defaults to 0777.
// callback - This is the callback function. No arguments other than a possible exception
// are given to the completion callback.
//

//
// Example:
//

// Let us create a js file named main.js having the following code -

var fs = require("fs");

console.log("Going to create directory /tmp/test");

fs.mkdir('/tmp/test', function(err) {

   if (err) {

      return console.error(err);

   }

   console.log("Directory created successfully!");

});


// Now run the main.js to see the result -
// $ node main.js

//
// OUTPUT
//
// “Going to create directory /tmp/test
// Directory created successfully!”
//

