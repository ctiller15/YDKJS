// Cheating lexical scope.

function foo(str, a) {
	// Completely overrides lexical scope.
	eval( str ); // cheating!
	console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 );