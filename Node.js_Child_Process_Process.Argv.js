// Node.js Process.Argv
// The process.argv property returns an array containing the command line arguments 
// passed when the child Node.js process was launched by its master process.

// You can use this to find out what arguments are being passed to your program.

// Process.Argv stores everything as an array, so to view a specific argument, use
// indexing as such:

/***********************************************************************

process.argv[2] – this would return the first ‘user supplied’ argument.
process.argv[0] – returns the PATH to node.js exec.

***********************************************************************/

// 
// Example:
// 

// For Example let’s print the arguments passed by the master process.

process.argv.forEach(function(val, index) {

console.log(index+ ‘:’ + val)

})


/***********************************************************************

With process.argv, the first element will be the node.js path.
The second element is the path to the JavaScript file being executed.
Every element after is a user supplied argument.

***********************************************************************/
