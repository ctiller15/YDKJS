// It is strongly preferred by the majority of the JS community to use the literal
// form of string for a value where possible instead of the object construct.

var strPrimitive = "I am a string";

console.log( strPrimitive.length );	// 13

console.log( strPrimitive.charAt( 3 ) );	// m

// In both cases the engine coerces it to a string object
// so that the relevant method works.