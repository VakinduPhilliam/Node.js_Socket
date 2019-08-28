// Node.js Web Module Creating Web client using Node

// Creating Web client using Node
// A web client can be created using http module. 
//

//
// Example:
// 
// Create a js file named client.js -

// 
// File: client.js
//

var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index3.htm'  
};

// Callback function is used to deal with response

var callback = function(response) {

   // Continuously update stream with data

   var body = '';
   response.on('data', function(data) {
      body += data;

   });
   
   response.on('end', function() {

      // Data received completely.
      console.log(body);

   });
}

// Make a request to the server
var req = http.request(options, callback);

req.end();

//
// Now run the client.js from a different command terminal other than server.js to see
// the result:
//

// 
// $ node client.js
// 
// Verify the Output.
//

// 
// <html>
//   <head>
//      <title>Sample Page</title>
//   </head>
//   
//   <body>
//      Hello World!
//   </body>
// </html>
//

//
// Verify the Output at server end.
//
// Server running at http://127.0.0.1:8081/
//
// Request for /index.htm received.
//

