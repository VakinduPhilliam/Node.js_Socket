// Node.js Concatenate Buffers

// Concatenate Buffers
// Syntax:
// The following is the syntax of the method to concatenate Node buffers to a single
// Node Buffer:

Buffer.concat(list[, totalLength])

// Parameters:
// Here is the description of the parameters used:
// list - Array List of Buffer objects to be concatenated.
// totalLength - This is the total length of the buffers when concatenated.

// Return Value:
// This method returns a Buffer instance.
//

//
// Example:
//

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());

//
// OUTPUT:
//
// When the above program is executed, it produces the following result -
//
 
//
// buffer3 content: TutorialsPoint Simply Easy Learning
//

