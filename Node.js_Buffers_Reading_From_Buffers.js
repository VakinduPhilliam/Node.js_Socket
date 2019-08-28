// Node.js Reading from Buffers

// Reading from Buffers
// Syntax:
// The following is the syntax of the method to read data from a Node Buffer:

buf.toString([encoding][, start][, end])

// Parameters:
// Here is the description of the parameters used -
// encoding - Encoding to use. 'utf8' is the default encoding.
// start - Beginning index to start reading, defaults to 0.
// end - End index to end reading, defaults is complete buffer.

// Return Value:
// This method decodes and returns a string from buffer data encoded using the
// specified character set encoding.

//
// Example
//


buf = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {

  buf[i] = i + 97;

}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//
// OUTPUT:
// When the above program is executed, it produces the following result:
//
// abcdefghijklmnopqrstuvwxyz
// abcde
// abcde
// abcde

