// In both non-strict mode and strict mode, you can create
// a local variable of the name undefined.
// ALSO a bad idea!

function foo() {
	"use strict";
	var undefined = 2;
	console.log( undefined );	// 2
}

foo();

// don't override undefined. Ever.