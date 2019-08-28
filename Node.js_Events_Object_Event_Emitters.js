// Node.js Object Event Emitters

// When an EventEmitter instance faces any error, it emits an 'error' event. 
// When a new listener is added, 'newListener' event is fired and when a listener is
// removed, 'removeListener' event is fired.

// EventEmitter provides multiple properties like ‘on’ and ‘emit’. 

// Create a js file named main.js with the following Node.js code -


var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {

   console.log('listner1 executed.');

}

// listener #2
var listner2 = function listner2() {

   console.log('listner2 executed.');

}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);

console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");


//
// OUTPUT:
// 2 Listner(s) listening to connection event

// listner1 executed.
// listner2 executed.
// Listner1 will not listen now.
// listner2 executed.

// 1 Listner(s) listening to connection event

// Program Ended.

