// To fix the "falsy gotcha", some people write a more verbose check:

function foo(x,y) {
	x = (x !== undefined) ? x : 11;
	y = (y !== undefined) ? y : 31;

	console.log( x + y);
}

foo( 0, 42 );					// 42
foo( undefined, 6 );		// 17

// Any value besides undefined can be directly passed in.