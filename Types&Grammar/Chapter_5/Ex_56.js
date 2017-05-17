// If you pass an argument, the arguments slot and the named param are linked and always have the same value.
// if you omit the argument, no such linkage occurs.
// In strict mode, the linkage doesn't exist regardless:

function foo(a) {
	"use strict";
	a = 42;
	console.log( arguments[0] );
}

foo( 2 );			// 2 (not linked)
foo();				// undefined (not linked)