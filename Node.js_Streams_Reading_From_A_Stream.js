// Node.js Reading from a Stream

// Reading from a Stream
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
// Reading from a Stream
//
//
// Example:
//
// Create a text file named input.txt having the following content:
// “Tutorials Point is giving self learning content to teach the world in simple and easy
// way!!!!!”
//

//
// Create a js file named main.js with the following code:
//

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {

   data += chunk;

});

// Handle Success
readerStream.on('end',function() {

   console.log(data);

});

// Handle error
readerStream.on('error', function(err) {

   console.log(err.stack);

});

console.log("Program Ended");


// Now run the main.js to see the result by running the command
// $ node main.js

//
// OUTPUT:
//
// “Program Ended
// Tutorials Point is giving self learning content to teach the world in simple and easy
// way!!!!!”
//
