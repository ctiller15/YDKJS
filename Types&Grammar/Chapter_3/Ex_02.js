// While each of the natives can be used as a constructor,
// What's being constructed may be different than you think.

var a = new String( "abc" );

console.log(typeof a);	// "object" ... not "String"

a instanceof String;	// true

Object.prototype.toString.call( a );	// "[object String]"

// These objects are not their own special types, but are subtypes
// of the object type.