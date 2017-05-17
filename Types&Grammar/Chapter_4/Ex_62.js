// Unboxing is related to the ToPrimitive coercion in the == algorithm.

var a = "abc";
var b = Object( a );		// same as `new String( a )`

console.log( a === b );				// false
console.log( a == b );				// true