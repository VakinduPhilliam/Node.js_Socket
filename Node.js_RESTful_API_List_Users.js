// Node.js RESTful API List Users

// Listing Users from a JSON Database, for example users.json
// REST stands for REpresentational State Transfer. 
// REST is web standards based architecture and uses HTTP Protocol. 
// It revolves around resource where every component is a resource and a resource is
// accessed by a common interface using HTTP standard methods. 

// REST was first introduced by Roy Fielding in 2000.
// A REST Server simply provides access to resources and REST client accesses and
// modifies the resources using HTTP protocol. 

// Here each resource is identified by URIs/ global IDs. 
// REST uses various representation to represent a resource like text, JSON, XML but
// JSON is the most popular one.

// HTTP methods
// The following four HTTP methods are commonly used in REST based architecture.
// GET - This is used to provide a read only access to a resource.
// PUT - This is used to create a new resource.
// DELETE - This is used to remove a resource.
// POST - This is used to update a existing resource or create a new resource.

// 
// Example:
//
// This example assumes you already know how to pass values from frontend using Ajax
// or simple form data and how to process them using express Request object.
//

//
// List Users:
// Show list of all the users stored in the JSON database.
//

//
// Let's implement our first RESTful API listUsers using the following code in a server.js
// file:
//

//
// server.js
//

var express = require('express');
var app = express();

var fs = require("fs");

app.get('/listUsers', function (req, res) {

   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {

      console.log( data );

      res.end( data );

   });
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})


//
// Now try to access defined API using URL: http://127.0.0.1:8081/listUsers and HTTP 
//

// Method: GET on local machine using any REST client. 

// This should produce following result:

// You can change given IP address when you will put the solution in production
// environment.

//
// {
//   "user1" : {
//      "name" : "mahesh",
//      "password" : "password1",
//      "profession" : "teacher",
//      "id": 1
//   },
//   
//   "user2" : {
//      "name" : "suresh",
//      "password" : "password2",
//      "profession" : "librarian",
//      "id": 2
//   },
//   
//   "user3" : {
//      "name" : "ramesh",
//      "password" : "password3",
//      "profession" : "clerk",
//      "id": 3
//   }
// }
// 

