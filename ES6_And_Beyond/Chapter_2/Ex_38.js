// Array destructuring for parameters:

function foo( [ x, y ] ) {
	console.log( x, y );
}

foo( [ 1, 2 ] );
foo( [ 1 ] );
foo( [] );