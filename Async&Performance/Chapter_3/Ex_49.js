// Timeout Race

// Promise.race can be used to express the promise timeout pattern:

// `foo()` is a Promise-aware function

// `timeoutPromise(..)`, defined earlier, returns
// a Promise that rejects after a specified delay.

// setup a timeout for `foo()`
Promise.race( [
	foo(),					// attempt `foo()`
	timeoutPromise( 3000 )	// give it 3 seconds
] )
.then(
	function(){
		// `foo(..)` fulfilled in time!
	},
	function(err){
		// either `foo()` rejected, or it just
		// didn't finish in time, so inspect
		// `err` to know which
	}
);