// implicit boolean coercion.

var a = 42;
var b = "abc";
var c;
var d = null;

if (a) {
	console.log( "yep" );
}

while (c) {
	console.log( "nope, never runs" );	// yep
}

c = d ? a : b;
console.log( c );				// "abc"

if ((a && d) || c) {
	console.log( "yep" );				// yep
}