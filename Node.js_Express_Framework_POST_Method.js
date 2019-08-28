// Node.js Express Framework POST Method

// POST Method
// Here is a simple example which passes two values using HTML FORM POST method. 
// We are going to use process_post router inside server.js to handle this input.
//

// <html>
//   <body>
//      
//      <form action = "http://127.0.0.1:8081/process_post" method = "POST">
//         First Name: <input type = "text" name = "first_name"> <br>
//         Last Name: <input type = "text" name = "last_name">
//         <input type = "submit" value = "Submit">
//      </form>
//      
//   </body>
// </html>

//
// Let's save the above code in index1.htm and modify server.js to handle home page
// requests as well as the input sent by the HTML form.
//

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index1.htm', function (req, res) {

   res.sendFile( __dirname + "/" + "index1.htm" );

})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
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
// Accessing the HTML document using http://127.0.0.1:8081/index1.htm will generate 
// the following form:
//

//
// First Name:	
// Last Name:	
// Submit
//

// Now you can enter the First and Last Name and then click the submit button to see
// the following result:

// {"first_name":"John","last_name":"Paul"}

