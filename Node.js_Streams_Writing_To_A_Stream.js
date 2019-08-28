// Node.js Writing to a Stream

// Writing to a Stream
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
// Writing to a Stream
// Create a js file named main.js with the following code -
//

var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {

   console.log("Write completed.");

});

// Handle error
writerStream.on('error', function(err) {

   console.log(err.stack);

});

console.log("Program Ended");


//
// Now run the main.js to see the result:
// $ node main.js

//
// OUTPUT:
//

// “Program Ended
// Write completed.
// “

// Now open output.txt created in your current directory; it should contain the
// following:
//
// “Simply Easy Learning”
//

