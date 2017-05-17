// Overly trusting of input:

function addNumbers(x,y) {
	// + is overloaded with coercion to also be
	// string concatenation, so this operation
	// isn't strictly safe depending on what's
	// passed in.
	console.log( x + y );
	return x + y;
}

addNumbers( 21, 21 );	// 42
addNumbers( 21, "21" );	// "2121"