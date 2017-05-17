// First, let's rearrange what foo(..) returns so that we don't have to wrap x and y into
// a single array value to transport through one Promise.
// wrap each value into its own promise:

function foo(bar,baz) {
	var x = bar * baz;

	// return both promises
	return [
	Promise.resolve(x),
	getY( x )
	];
}

Promise.all(
	foo( 10, 20 )
	)
	.then( function(msgs){
		var x = msgs[0];
		var y = msgs[1];

		console.log( x, y );
	} );