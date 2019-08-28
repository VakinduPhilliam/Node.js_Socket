// Node.js Convert Buffer to JSON

// Convert Buffer to JSON
// Syntax:
// The following is the syntax of the method to convert a Node Buffer into JSON object

buf.toJSON()

// Return Value:
// This method returns a JSON-representation of the Buffer instance.

// Example:

var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);

//
// OUTPUT:
//

//
// When the above program is executed, it produces the following result:
//

// { type: 'Buffer',
//   data: 
//   [ 
//      83,
//      105,
//      109,
//      112,
//      108,
//      121,
//      32,
//      69,
//      97,
//      115,
//      121,
//      32,
//      76,
//      101,
//      97,
//      114,
//      110,
//      105,
//      110,
//      103 
//   ]
// }
//

