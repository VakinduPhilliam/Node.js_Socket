// Node.js Writing to Buffers

// Writing to Buffers.
// Syntax:
// The following is the syntax of the method to write into a Node Buffer -

buf.write(string[, offset][, length][, encoding])

// Parameters:
// Here is the description of the parameters used -
// string - This is the string data to be written to buffer.
// offset - This is the index of the buffer to start writing at. Default value is 0.
// length - This is the number of bytes to write. Defaults to buffer.length.
// encoding - Encoding to use. 'utf8' is the default encoding.

// Return Value:

// This method returns the number of octets written. If there is not enough space in the
// buffer to fit the entire string, it will write a part of the string.
//
// Example:
//

buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);


// When the above program is executed, it produces the following result -
// Octets written : 20
