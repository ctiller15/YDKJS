// JSON stringification, for most simple values, behaves exactly the same
// as toString(), except the serialization result is always a string.

console.log(JSON.stringify( 42 ));		// 42
console.log(JSON.stringify( "42" ));	// ""42""	(a string with a quoted string value in it)
console.log(JSON.stringify( null ));	// "null"
console.log(JSON.stringify( true ));	// "true"