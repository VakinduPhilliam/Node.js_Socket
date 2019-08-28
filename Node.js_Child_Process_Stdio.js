// Node.js Child Process Stdio

// Child processes always have three streams child.stdin, child.stdout, and child.stderr
// which may be shared with the stdio streams of the parent process. 

/***********************************************************************

These stand for; 
Standard Input (stdin), 
Standard Output (stdout), 
Standard Error (stderr).

***********************************************************************/

//
// Example:
//

// 
// Create two js files named support.js and master.js:
//

//
// File: support.js
// 

console.log("Child Process " + process.argv[2] + " executed." );

//
// File: master.js
//

const fs = require('fs');
const child_process = require('child_process');
 
for(var i = 0; i<3; i++) {

   var workerProcess = child_process.spawn('node', ['support.js', i]);

   workerProcess.stdout.on('data', function (data) {

      console.log('stdout: ' + data);

   });

   workerProcess.stderr.on('data', function (data) {

      console.log('stderr: ' + data);

   });

   workerProcess.on('close', function (code) {

      console.log('child process exited with code ' + code);

   });
}

//
// Now run the master.js to see the result -
// $ node master.js

//
// OUTPUT:
//
// stdout: Child Process 0 executed.
// child process exited with code 0
// stdout: Child Process 1 executed.
// stdout: Child Process 2 executed.
// child process exited with code 0
// child process exited with code 0
//
