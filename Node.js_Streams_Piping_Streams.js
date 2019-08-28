// Node.js Piping the Streams

// Piping Streams
// Piping is a mechanism where we provide the output of one stream as the input to
// another stream. 

// It is normally used to get data from one stream and to pass the output of that stream
// to another stream. 

// There is no limit on piping operations. 

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

//
// Example
// A piping example for reading from one file and writing it to another file.

//
// Create a js file named main.js with the following code -
//

var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

//
// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//
// “Program Ended”
// Open output.txt created in your current directory; it should contain the following:
// “Tutorials Point is giving self learning content to teach the world in simple and easy
// way!!!!!”


