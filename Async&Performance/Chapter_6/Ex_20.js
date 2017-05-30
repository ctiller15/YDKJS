// Block-scoping of function declarations could be a problem
// if you've ever written code like that,
// and relied on the old legacy non-block-scoped behavior:

if (something) {
	function foo() {
		console.log( "1" );
	}
}
else {
	function foo() {
		console.log( "2" );
	}
}

foo();		// ??