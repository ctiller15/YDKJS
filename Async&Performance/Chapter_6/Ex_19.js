// As of ES6, function declarations inside of blocks are now
// scoped to that block.

{
	foo();				// works!

	function foo() {
		// ..
	}
}

foo();					// ReferenceError

// Didn't receive error!