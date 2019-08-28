// Node.js RESTful API Add User

// Add User to a JSON Database, to for example users.json
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
// Add User
// The following API will show you how to add new user in the list. 
	
// The details of the new user:

//
// user = {
//   "user4" : {
//      "name" : "mohit",
//      "password" : "password4",
//      "profession" : "teacher",
//      "id": 4
//   }
// }

// 
// You can accept the same input in the form of JSON using Ajax call but for teaching
// point of view, we are making it hard coded here. 
//

//
// The following is the addUser API to a new user in the database:
//

// server.js


var express = require('express');
var app = express();

var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {

      data = JSON.parse( data );
      data["user4"] = user["user4"];

      console.log( data );

      res.end( JSON.stringify(data));

   });
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})


//
// Now try to access defined API using URL: http://127.0.0.1:8081/addUser and HTTP
// Method: POST on local machine using any REST client. 
//

// This should produce following result:

// 
// {
//   "user1":{"name":"mahesh","password":"password1","profession":"teacher","id":1},
//   "user2":{"name":"suresh","password":"password2","profession":"librarian","id":2},
//   "user3":{"name":"ramesh","password":"password3","profession":"clerk","id":3},
//   "user4":{"name":"mohit","password":"password4","profession":"teacher","id":4}
// }
//

