// Defensive against untrusted input:

function addNumbers(x,y) {
	// ensure numerical input
	if (typeof x != "number" || typeof y != "number") {
		throw Error( "Bad parameters" );
	}

	// if we get here, + will safely do numeric addition
	console.log( x + y );
	return x + y;
}

addNumbers( 21, 21 );	// 42
addNumbers( 21, "21" );	// Error: "Bad parameters"