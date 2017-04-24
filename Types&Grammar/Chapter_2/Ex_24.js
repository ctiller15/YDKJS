// In non-strict mode, it's possible to assign a value
// to the globally provided undefined identifier.

function foo() {
	undefined = 2;	// WHY!?!?!
}

foo();

function foo() {
	"use strict";
	undefined = 2;	// TypeError! Makes sense!
}

foo();