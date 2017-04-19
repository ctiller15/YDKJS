// eval(..) in strict-mode.

function foo(str) {
	"use strict";
	eval(str);
	console.log( a ); // ReferenceError: a is not defined.
}

foo( "var a = 2" );

// eval(..) when used in a strict-mode program operates in its own lexical scope.
// It does not modify the enclosing scope, as it normally would.