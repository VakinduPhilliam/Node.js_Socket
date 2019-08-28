// Node.js File System Open file

// Node implements File I/O using simple wrappers around standard POSIX functions. 
// The Node File System (fs) module can be imported using the following syntax:

var fs = require("fs")

// Open a File
// Syntax:
// The following is the syntax of the method to open a file in asynchronous mode:

fs.open(path, flags[, mode], callback)

//
// Parameters:
// Here is the description of the parameters used:
// path - This is the string having file name including path.
// flags - Flags indicate the behavior of the file to be opened. All possible values have 
// been mentioned below.
// mode - It sets the file mode (permission and sticky bits), but only if the file was
// created. It defaults to 0666, readable and writeable.
// callback - This is the callback function which gets two arguments (err, fd).
//

// Flags
// Flags for read/write operations are:
//

// 1. r
// Open file for reading. An exception occurs if the file does not exist.
//
// 2. r+
//
// Open file for reading and writing. An exception occurs if the file does not exist.
//
// 3. rs
// Open file for reading in synchronous mode.
//
// 4. rs+
// Open file for reading and writing, asking the OS to open it synchronously. 
//
// 5. w
// Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
//
// 6. wx
// Like 'w' but fails if the path exists.
//
// 7. w+
// Open file for reading and writing. The file is created (if it does not exist) or truncated // (if it exists).
//
// 8. wx+
// Like 'w+' but fails if path exists.
//
// 9. a
// Open file for appending. The file is created if it does not exist.
//
// 10. ax
// Like 'a' but fails if the path exists.
//
// 11. a+
// Open file for reading and appending. The file is created if it does not exist.
//
// 12. ax+
// Like 'a+' but fails if the the path exists.
//

//
// Example:
//
// Let us create a js file named main.js having the following code to open a file input.txt
// for reading and writing.
//

var fs = require("fs");

// Asynchronous - Opening File

console.log("Going to open file!");

fs.open('input.txt', 'r+', function(err, fd) {

   if (err) {

      return console.error(err);

   }

   console.log("File opened successfully!");     

});


// Now run the main.js to see the result:
// $ node main.js
//

//
// OUTPUT:
//
// “Going to open file!
// File opened successfully!”
//

