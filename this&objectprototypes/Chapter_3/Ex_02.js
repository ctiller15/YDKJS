// In JS, all of the built-ins are actually built-in functions.
// Each of them can be used as a constructor.

var strPrimitive = "I am a string";
console.log(typeof strPrimitive);	// string
console.log(strPrimitive instanceof String);	// false

var strObject = new String( "I am a string" );
console.log(typeof strObject);	// object
console.log(strObject instanceof String);	// true

// inspect the object sub-type
console.log(Object.prototype.toString.call( strObject ));	// [object String]