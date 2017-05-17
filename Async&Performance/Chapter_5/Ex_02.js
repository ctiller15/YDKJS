// Here's how to listen for events.
// In this case, the fixed "message" event

w1.addEventListener( "message", function(evt){
	// evt.data
} );

// And you can send the "message" event to the Worker:

w1.postMessage( "something cool to say" );

// Inside the Worker, the messaging is totally symmetrical:

// "mycoolworker.js"

addEventListener( "message", function(evt){
	// evt.data
} );

postMessage( "a really cool reply" );