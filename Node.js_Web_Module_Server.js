// Node.js Web Module Server

// Creating a Web Server using Node
// Node.js provides an http module which can be used to create an HTTP client of a
// server. 
// The following is the bare minimum structure of the HTTP server which listens at 8081
// port.

//
// Create a js file named server.js:
//

// 
// File: server.js
// 

var http = require('http');
var fs = require('fs');

var url = require('url');

// Create a server

http.createServer( function (request, response) {  

   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {

      if (err) {

         console.log(err);
         
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain

         response.writeHead(404, {'Content-Type': 'text/html'});

      } else {	

         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain

         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		

      }
      
      // Send the response body 
      response.end();

   });   

}).listen(8081);

// Console will print the message

console.log('Server running at http://127.0.0.1:8081/');

//
// Next let's create the following html file named index.htm in the same directory where // you created server.js.
//

//
// File: index3.htm
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
// Now let us run the server.js to see the result:
// $ node server.js
//

//
// OUTPUT:
//
// Server running at http://127.0.0.1:8081/
//

//
// Make a request to Node.js server
// Open http://127.0.0.1:8081/index.htm in any browser to see the following result.
//

// First Server Application
//
// Verify the Output at server end.
//
// Server running at http://127.0.0.1:8081/
// Request for /index.htm received.
//

