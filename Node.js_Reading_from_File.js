// Node.js Reading from a File

// Create a text file named input.txt with the following content.

// “Node.js self learning content to teach the world in a simple and easy 
// way!!!!!”

// Create a node.js file and name it main.js 
// Place the following code into main.js


var fs = require("fs");

fs.readFile('input.txt', function (err, data) {

   if (err) return console.error(err);

   console.log(data.toString());

});

console.log("Program Ended");


// OUTPUT:
// “Program Ended
// Node.js self learning content to teach the world in a simple and easy
// way!!!!!”

// NOTICE THE PROGRAM ENDS FIRST, WHILE FILE IS STILL BEING READ, THAT’S THE 
// BEAUTY OF ASYNCHRONOUS PROGRAMMING.

// The program does not wait for file reading and proceeds to print "Program Ended"
// and at the same time, the program continues reading the file.

