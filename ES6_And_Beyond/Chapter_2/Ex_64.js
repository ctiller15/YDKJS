// An interpolated string literal is kind of like an IIFE.
// Helps explain scoping behavior.

function foo(str) {
	var name = "foo";
	console.log( str );
}

function bar() {
	var name = "bar";
	foo( `Hello from ${name}!` );
}

var name = "global";

bar();							// "Hello from bar!"