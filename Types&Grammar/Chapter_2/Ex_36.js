// In Javascript, it IS possible to overflow.

var a = Number.MAX_VALUE;
console.log(a + a);					// Infinity

console.log(a + Math.pow( 2, 970 ));	// Infinity
console.log(a + Math.pow( 2, 969 ));	// 1.7976931348623157e+308