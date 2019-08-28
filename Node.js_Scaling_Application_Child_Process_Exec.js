// Node.js Scaling Application Child Process Exec

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

//
// The exec() method
// child_process.exec method runs a command in a shell and buffers the output. 
//

//
// It has the following signature:
//

child_process.exec(command[, options], callback)

//
// Parameters:
//

// Here is the description of the parameters used:
//
// command (String) The command to run, with space-separated arguments
// options (Object) may comprise one or more of the following options -
// cwd (String) Current working directory of the child process
// env (Object) Environment key-value pairs
// encoding (String) (Default: 'utf8')
// shell (String) Shell to execute the command with (Default: '/bin/sh' on UNIX, 
// 'cmd.exe' on Windows, 
// The shell should understand the -c switch on UNIX or /s /c on Windows. 
// On Windows, command line parsing should be compatible with cmd.exe.)
//

// timeout (Number) (Default: 0)
// maxBuffer (Number) (Default: 200*1024)
// killSignal (String) (Default: 'SIGTERM')
// uid (Number) Sets the user identity of the process.
// gid (Number) Sets the group identity of the process.
// callback The function gets three arguments error, stdout, and stderr which are called
// with the output when the process terminates.
// The exec() method returns a buffer with a max size and waits for the process to end
// and tries to return all the buffered data at once.
//

//
// Example:
// Let us create two js files named support.js and master.js:
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

   var workerProcess = child_process.exec('node support.js '+i,function 

      (error, stdout, stderr) {
      
      if (error) {

         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);

      }

      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);

   });

   workerProcess.on('exit', function (code) {

      console.log('Child process exited with exit code '+code);

   });
}

//
// Now run the master.js to see the result:
// $ node master.js
//

// 
// OUTPUT:
//

//
// Child process exited with exit code 0
// stdout: Child Process 1 executed.
// stderr:

//
// Child process exited with exit code 0
// stdout: Child Process 0 executed.
// stderr:

// 
// Child process exited with exit code 0
// stdout: Child Process 2 executed.
// 

