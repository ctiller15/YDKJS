// demonstrating that the properties are not accessible
// outside of foo.

function foo(a) {
	var b = 2;

	// some code

	function bar() {
		// ...
	}

	// more code

	var c = 3;
}

bar(); // fails, bar is not defined.

console.log( a, b, c ); // fails, a, b, c aren't defined.