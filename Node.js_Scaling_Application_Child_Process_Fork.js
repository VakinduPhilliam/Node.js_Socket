// Node.js Scaling Application Child Process Fork

// Node.js runs in a single-thread mode, but it uses an event-driven paradigm to handle
// concurrency. 
// It also facilitates creation of child processes to leverage parallel processing on 
// multi-core CPU based systems.
// Child processes always have three streams child.stdin, child.stdout, and child.stderr 
// which may be shared with the stdio streams of the parent process.
//

//
// Node provides child_process module which has the following three major ways to
// create a child process.
//
// exec - child_process.exec method runs a command in a shell/console and buffers the
// output.
// spawn - child_process.spawn launches a new process with a given command.
// fork - The child_process.fork method is a special case of the spawn() to create child
// processes.
//

// The fork() Method
// child_process.fork method is a special case of spawn() to create Node processes. 
//
// It has the following signature:
//

child_process.fork(modulePath[, args][, options])

//
// Parameters:
// Here is the description of the parameters used:
//
// modulePath (String) The module to run in the child.
// args (Array) List of string arguments
// options (Object) may comprise one or more of the following options:
// cwd (String) Current working directory of the child process.
// env (Object) Environment key-value pairs.
// execPath (String) Executable used to create the child process.
// execArgv (Array) List of string arguments passed to the executable 
// (Default: process.execArgv).
// silent (Boolean) If true, stdin, stdout, and stderr of the child will be piped to the
// parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit"
// options for spawn()'s stdio for more details (default is false).
//
// uid (Number) Sets the user identity of the process.
// gid (Number) Sets the group identity of the process.
//
// The fork method returns an object with a built-in communication channel in addition
// to having all the methods in a normal ChildProcess instance.

// 
// Example:
//

//
// Create two js files named support.js and master.js -
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
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("support.js", [i]);	

   worker_process.on('close', function (code) {

      console.log('child process exited with code ' + code);

   });
}

//
// Now run the master.js to see the result -
// $ node master.js
//

//
// OUTPUT:
//
// Child Process 0 executed.
// Child Process 1 executed.
// Child Process 2 executed.
//

//
// child process exited with code 0
// child process exited with code 0
// child process exited with code 0
//

