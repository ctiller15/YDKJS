// Never refer to a named parameter and its corresponding arguments slot at the same time.

function foo(a) {
	console.log( a + arguments[1] );	// safe!
}

foo( 10, 32 );	// 42