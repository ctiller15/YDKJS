// If you want to box a primitive value, use the Object(..)
// function with no new keyword.

var a = "abc";
var b = new String( a );
var c = Object( a );

console.log(typeof a);	// "string"
console.log(typeof b);	// "object"
console.log(typeof c);	// "object"

console.log(b instanceof String);	// "true"
console.log(c instanceof String);	// "true"

console.log(Object.prototype.toString.call( b ));	// "[object String]"
console.log(Object.prototype.toString.call( c ));	// "[object String]"
