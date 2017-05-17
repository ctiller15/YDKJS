// How we'd use it in the timeout example:

Promise.race( [
	Promise.observe(
		foo(),						// attempt `foo()`
		function cleanup(msg){
			// clean up after `foo()`, even if it
			// didn't finish before the timeout
		}
	),
	timeoutPromise( 3000 )		// give it 3 seconds
] )