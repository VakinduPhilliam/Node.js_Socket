// Node.js creating, binding and emitting a events

// ‘on’ property is used to bind a function with the event and ‘emit’ is used to fire an
// event.

// Create a js file named main.js with the following code


// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection successful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');

}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {

   console.log('data received successfully.');

});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");


// OUTPUT: 
// “connection successful.
// data received successfully.
// Program Ended.”

