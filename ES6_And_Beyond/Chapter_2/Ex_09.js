// One of the most common idioms in JS is setting the default value
// for a function parameter.

function foo(x,y) {
	x = x || 11;
	y = y || 31;

	console.log( x + y );
}

foo();					// 42
foo( 5, 6 );			// 11
foo( 5 );				// 36
foo( null, 6 );			// 17

// Helpful, but dangerous.
// If you need to pass in a value that would be falsy otherwise...

foo( 0, 42 );				// 53 <-- Oops, not 42