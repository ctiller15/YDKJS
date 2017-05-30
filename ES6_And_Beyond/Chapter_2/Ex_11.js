// You could test to see if the argument is actually omitted by not being
// present in the arguments array:

function foo(x,y) {
	x = (0 in arguments) ? x : 11;
	y = (1 in arguments) ? y : 31;

	console.log( x + y );
}

foo( 5 );							// 36
foo( 5, undefined );			// NaN