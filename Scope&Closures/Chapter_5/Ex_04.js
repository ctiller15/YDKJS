// Indirect passings of functions.

var fn;

function foo() {
	var a = 2;

	function baz() {
		console.log( a );
	}

	fn = baz;	// assign 'baz' to global variable
}

function bar() {
	fn();	//"baz();", and we have closure!
}

foo();

bar();	// 2.

// Scope ref to where it was originally declared.
// When we executed it, the closure was exercised.