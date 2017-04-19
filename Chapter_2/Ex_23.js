// Strict mode disallows implicit auto-global variable declarations!

function foo() {
	"use strict"; // turn on strict mode...
	a 1;				// 'var' is missing, ReferenceError.
}

foo();