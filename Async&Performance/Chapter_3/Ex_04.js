// With promises, the then(..) call actually takes two functions. The first for fulfillment, and the second for rejection:

add( fetchX(), fetchY() )
.then(
	// fulfillment handler
	function(sum) {
		console.log( sum );
	},
	// rejection handler
	function(err) {
		console.error( err );	// bummer!
	}
);