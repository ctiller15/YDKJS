// A similar outcome to coercing a string to a number can be accomplished  by parsin
// a number out of a string's character contents.

var a = "42";
var b = "42px";

console.log(Number( a ));	// 42
console.log(parseInt( a ));	// 42

console.log(Number( b ));	// NaN
console.log(parseInt( b ));	// 42