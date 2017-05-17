// Natural way of expressing "completion" and "error".

function foo(x) {
	// start doing something that could take a while.

	// make a `listener` event notification
	// capability to return

	return listener;
}

var evt = foo( 42 );

evt.on( "completion", function(){
	// now we can do the next step!
} );

evt.on( "failure", function(err){
	// oops, something went wrong in `foo(..)`
} );