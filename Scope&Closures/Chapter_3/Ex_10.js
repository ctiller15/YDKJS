// Inline function expressions.

// Takes care of all of the drawbacks of anonymous functions and with zero downsides!

setTimeout( function timeoutHandler(){	// It has a name now! Whoo!
	console.log( "I waited 1 second!" );
}, 1000 );