// Node.js Express Framework GET Method

// GET Method
// Here is a simple example which passes two values using HTML FORM GET method. 
// We are going to use process_get router inside server.js to handle this input.

//
// <html>
//   <body>
//      
//      <form action = "http://127.0.0.1:8081/process_get" method = "GET">
//         First Name: <input type = "text" name = "first_name">  <br>
//         Last Name: <input type = "text" name = "last_name">
//         <input type = "submit" value = "Submit">
//      </form>
//      
//   </body>
// </html>
//

// 
// Let's save above code in index.htm and modify server.js to handle home page
// requests as well as the input sent by the HTML form.
// 

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {

// Display directory visited

   res.sendFile( __dirname + "/" + "index.htm" );

})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format

   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };

   console.log(response);

   res.end(JSON.stringify(response));

})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})


//
// Accessing the HTML document using http://127.0.0.1:8081/index.htm will generate
// the following form:
//

//
// First Name:	
// Last Name:	
//
// Submit
//

//
// Now you can enter the First and Last Name and then click submit button to see the
// result and it should return the following result -
//
// {"first_name":"John","last_name":"Paul"}
//

