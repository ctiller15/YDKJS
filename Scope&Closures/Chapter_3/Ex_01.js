// Lexical scope via functions.

function foo(a) {
	var b = 2;

	// some code

	function bar() {
		// ...
	}

	// more code

	var c = 3;
}

// The global scope bubble just has the foo identifier attached to it.

// The foo scope bubble contains a, b, c, and the function bar.
// They cannot be accessed outside of foo.

// bar has its own, empty scope bubble.