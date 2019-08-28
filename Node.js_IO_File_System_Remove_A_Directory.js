// Node.js Remove a Directory

// Remove a Directory
// Syntax:
// The following is the syntax of the method to remove a directory:

fs.rmdir(path, callback)

// 
// Parameters:
// Here is the description of the parameters used:
// path - This is the directory name including path.
// callback - This is the callback function No arguments other than a possible exception
// are given to the completion callback.
// 

//
// Example:
//

// Let us create a js file named main.js having the following code -

var fs = require("fs");

console.log("Going to delete directory /tmp/test");

fs.rmdir("/tmp/test",function(err) {

   if (err) {

      return console.error(err);

   }

   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files) {

      if (err) {

         return console.error(err);

      }

      files.forEach( function (file) {

         console.log( file );

      });
   });
});


// Now run the main.js to see the result -
// $ node main.js

// 
// OUTPUT:
// 

//
// “Going to read directory /tmp
// ccmzx99o.out
// ccyCSbkF.out
// employee.ser
// hsperfdata_apache
// test.txt”
//

