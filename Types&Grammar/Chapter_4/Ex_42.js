// How can we implicitly coerce from string to number?

var a = "3.14";
var b = a - 0;

console.log( b );	// 3.14

// a * 1 or a / 1 would accomplish the same result.