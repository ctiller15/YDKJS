// You would typically use the error object with the throw operator.

function foo(x) {
	if (!x) {
		throw new Error( "x wasn't provided" );
	}
	// ..
}