// "hiding" variables inside functions can avoid unintended collisions.

function foo() {
	function bar(a) {
		var i = 3;			// changing the 'i' in the enclosing scope's for-loop.
		console.log( a + i );
	}

	for (var i = 0; i<10; i++){
		bar( i * 2 ); // infinite loop incoming!
	}
}

foo();

// the "i = 3" will overwrite the i that was declared in foo.
// Now we have an infinite loop since i is eternally at 3.
// changing the line to "var i = 3" actually solves this problem for us.
