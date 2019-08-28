// Node.js Slice Buffer

// Slice Buffer
// Syntax:
// The following is the syntax of the method to get a sub-buffer of a node buffer:

buf.slice([start][, end])


// Parameters:
// Here is the description of the parameters used -
// start - Number, Optional, Default: 0
// end - Number, Optional, Default: buffer.length

// Return Value:
// Returns a new buffer which references the same memory as the old one, but offset
// and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes. 

// Negative indexes start from the end of the buffer.

//
// Example:
//

var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);

console.log("buffer2 content: " + buffer2.toString());


//
// OUTPUT:
//

//
// When the above program is executed, it produces the following result -
// buffer2 content: Tutorials
//

