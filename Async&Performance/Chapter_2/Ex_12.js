// Safe but friendlier:

function addNumbers(x,y) {
	// ensure numerical input
	x = Number( x );
	y = Number( y );

	// + will safely do numeric addition
	console.log( x + y );
	return x + y;
}

addNumbers( 21, 21 );		// 42
addNumbers( 21, "21" );		// 42