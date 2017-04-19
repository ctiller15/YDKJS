// Using strict mode.

function foo() {
	"use strict";

	// This code will be in strict mode.

	function bar() {
		// this code is strict mode.
	}
}

// this code is not strict mode.

//It appears that anything underneath the scope of strict is in strict mode.