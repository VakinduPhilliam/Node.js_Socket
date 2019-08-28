// Node.js Chaining the Streams

// Chaining the Streams
// Chaining is a mechanism to connect the output of one stream to another stream and
// create a chain of multiple stream operations. 

// Streams are objects that let you read data from a source or write data to a
// destination in continuous fashion. 

// Types of Streams in Node.js
// In Node.js, there are four types of streams:
//

// Readable - Stream which is used for read operation.
// Writable - Stream which is used for write operation.
// Duplex - Stream which can be used for both read and write operation.
// Transform - A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at
// different instance of times. 

// For example, some of the commonly used events are -

// data - This event is fired when there is data available to read.
// end - This event is fired when there is no more data to read.
// error - This event is fired when there is any error receiving or writing data.
// finish - This event is fired when all the data has been flushed to underlying system.

// Chaining streams is normally used with piping operations. 
// Now we'll use piping and chaining to first compress a file and then decompress the
// same.

//
// Create a js file named main.js with the following code -
//

var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");


// Now run the main.js to see the result:
// $ node main.js

// OUTPUT:
// “File Compressed.”
// You will find that input.txt has been compressed and it created a file input.txt.gz in
// the current directory. 
//

//
// Now let's try to decompress the same file using the following code:
//


var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");


// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//

//
// “File Decompressed.”
//

