// Node.js Express Framework Serving Static Files

// Serving Static Files
// Express provides a built-in middleware express.static to serve static files, such as
// images, CSS, JavaScript, etc.
//
// You simply need to pass the name of the directory where you keep your static assets,
// to the express.static middleware to start serving the files directly. 
//
// For example, if you keep your images, CSS, and JavaScript files in a directory named
// public, you can do this:
//

app.use(express.static('public'));

// We will keep a few images in public/images sub-directory as follows:
// node_modules
// server.js
// public/
// public/images
// public/images/logo.png
//

// Let's modify "Hello Word" app to add the functionality to handle static files.

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

   res.send('Hello World');

})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})

//
// Save the above code in a file named server.js and run it with the following command.
// $ node server.js
//
// Now open http://127.0.0.1:8081/images/logo.png in any browser and see observe
// following result.
//
