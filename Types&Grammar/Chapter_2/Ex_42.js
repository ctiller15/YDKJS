// Object.is(..) can test two values for absolute equality.

var a = 2 / "foo";
var b = -3 * 0;

console.log(Object.is( a, NaN ));	// true
console.log(Object.is( b, -0 ));			// true

console.log(Object.is( b, 0 ));			// false