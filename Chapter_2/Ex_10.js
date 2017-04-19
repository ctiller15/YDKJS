// Understanding reference with coercion.

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

console.log( a == c );	// true
console.log( b == c );	// true
console.log( a == b );	// false