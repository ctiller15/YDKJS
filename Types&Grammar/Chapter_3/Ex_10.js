// Unboxing can also happen implicitly.

var a = new String( "abc" );
var b = a + "";	// `b` has the unboxed primitive value "abc"

console.log( typeof a );	// "object"
console.log( typeof b );	// "string"