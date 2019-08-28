// Node.js Scaling Application Child Process Spawn

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

// The spawn() Method
// child_process.spawn method launches a new process with a given command. 
//
// It has the following signature:
// 

child_process.spawn(command[, args][, options])

//
// Parameters:
// Here is the description of the parameters used:
//
// command (String) The command to run
// args (Array) List of string arguments
// options (Object) may comprise one or more of the following options:
// cwd (String) Current working directory of the child process.
// env (Object) Environment key-value pairs.
// stdio (Array) String Child's stdio configuration.
// customFds (Array) Deprecated File descriptors for the child to use for stdio.
// detached (Boolean) The child will be a process group leader.
// uid (Number) Sets the user identity of the process.
// gid (Number) Sets the group identity of the process.
// The spawn() method returns streams (stdout &stderr) and it should be used when the
// process returns a volume amount of data. 
// spawn() starts receiving the response as soon as the process starts executing.
//

// 
// Example:
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

