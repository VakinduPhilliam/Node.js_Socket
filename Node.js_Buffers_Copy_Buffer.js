// Node.js Copy Buffer

// Copy Buffer
// Syntax:
// The following is the syntax of the method to copy a node buffer:

buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

// Parameters:
// Here is the description of the parameters used -
// targetBuffer - Buffer object where buffer will be copied.
// targetStart - Number, Optional, Default: 0
// sourceStart - Number, Optional, Default: 0
// sourceEnd - Number, Optional, Default: buffer.length

// Return Value:
// No return value. 

// Copies data from a region of this buffer to a region in the target buffer even if the
// target memory region overlaps with the source. 

// If undefined, the targetStart and sourceStart parameters default to 0, while 
// sourceEnd defaults to buffer.length.

//
// Example:
//

var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());


//
// OUTPUT:
//
// When the above program is executed, it produces the following result:
// buffer2 content: ABC
//
