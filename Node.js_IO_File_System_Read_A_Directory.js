// Node.js File System Read a Directory

// Read a Directory
// Syntax:
// The following is the syntax of the method to read a directory:

fs.readdir(path, callback)

// Parameters:
// Here is the description of the parameters used:
// path - This is the directory name including path.
// callback - This is the callback function which gets two arguments (err, files) where
// files is an array of the names of the files in the directory excluding '.' and '..'.

// 
// Example:
//

// Let us create a js file named main.js having the following code:

var fs = require("fs");

console.log("Going to read directory /tmp");

fs.readdir("/tmp/",function(err, files) {

   if (err) {

      return console.error(err);

   }

   files.forEach( function (file) {

      console.log( file );

   });
});


// Now run the main.js to see the result -
// $ node main.js

// 
// OUTPUT:
// 
// “Going to read directory /tmp
// ccmzx99o.out
// ccyCSbkF.out
// employee.ser
// hsperfdata_apache
// test
// test.txt”
//

