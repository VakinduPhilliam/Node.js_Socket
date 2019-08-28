// Node.js Express Framework

// Express Framework
// Express is a minimal and flexible Node.js web application framework that provides a
// robust set of features to develop web and mobile applications. 
// It facilitates the rapid development of Node based Web applications. 

// 
// Core Features of Express:
// It allows you to set up middlewares to respond to HTTP Requests.
// Defines a routing table which is used to perform different actions based on HTTP
// Method and URL.
// Allows to dynamically render HTML Pages based on passing arguments to templates.
//

//
// You should install the following important modules along with express -
// body-parser - This is a node.js middleware for handling JSON, Raw, Text and URL
// encoded form data.
// cookie-parser - Parse Cookie header and populate req.cookies with an object keyed
// by the cookie names.
// multer - This is a node.js middleware for handling multipart/form-data.
//

// 
// Example:
//
// A very basic Express app which starts a server and listens on port 8081 for
// connection. 
// This app responds with “Hello World!” for requests to the homepage. 
// For every other path, it will respond with a 404 Not Found.
//

var express = require('express');
var app = express();

app.get('/', function (req, res) {

   res.send('Hello World');

})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})


// Save the above code in a file named server.js and run it with the following command.
// $ node server.js

// You will see the following output:
// “Example app listening at http://0.0.0.0:8081”

// Open http://127.0.0.1:8081/ in any browser to see the following result.
