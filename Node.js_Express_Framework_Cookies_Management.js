// Node.js Express Framework Cookies Management

// Cookies Management
// You can send cookies to a Node.js server which can handle the same using the
// following middleware option. 
// 

// 
// The following is a simple example to print all the cookies sent by the client.
// 

var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {

   console.log("Cookies: ", req.cookies)

})

app.listen(8081)


