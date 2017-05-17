// Another list of coercions:

console.log( 42 == "43");			// false
console.log( "foo" == 42);			// false
console.log("true" == true);		// false

console.log( 42 == "42");			// true
console.log( "foo" == [ "foo" ]);	// true