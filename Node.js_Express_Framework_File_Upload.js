// Node.js Express Framework File Upload

// Node.js Express Framework File Upload
// The following HTML code creates a file uploader form. This form has method attribute
// set to POST and enctype attribute is set to multipart/form-data
//
// <html>
//   <head>
//      <title>File Uploading Form</title>
//   </head>
//
//   <body>
//      <h3>File Upload:</h3>
//      Select a file to upload: <br />
//      
//      <form action = "http://127.0.0.1:8081/file_upload" method = "POST" 
//         enctype = "multipart/form-data">
//         <input type="file" name="file" size="50" />
//         <br />
//         <input type = "submit" value = "Upload File" />
//      </form>
//      
//   </body>
// </html>
//

//
// Let's save the above code in index2.htm and modify server.js to handle home page
// requests as well as file upload.
//

var express = require('express');
var app = express();

var fs = require("fs");

var bodyParser = require('body-parser');

var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/index2.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index2.htm" );
})

app.post('/file_upload', function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {

      fs.writeFile(file, data, function (err) {

         if( err ) {

            console.log( err );

            } else {

               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name

               };
            }
         
         console.log( response );

         res.end( JSON.stringify( response ) );

      });
   });
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})


//
// Accessing the HTML document using http://127.0.0.1:8081/index2.htm will generate
// the following form:
//

//
// File Upload:
// Select a file to upload: 
// 
// Choose File
//

//
// Upload File
// 
// NOTE: This is just dummy form and would not work, but it must work at your server.
//

