// Lexical scope

// global scope. Has the foo identifier.
function foo(a) {
	//scope of foo. Includes identifiers a, bar, and b.
	var b = a * 2;

	// scope of bar. Just has identifier c.
	function bar(c) {
		console.log( a, b, c);
	}

	bar(b * 3);

}

foo( 2 );	// 2 4 12