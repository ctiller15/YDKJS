var a = "foo";
var b = ["f","o","o"];

// another workaround is to convert the string into an array,
// perform the desired operation,
// then convert it back to a string.

var c = a
		// split `a` into an array of characters.
		.split( "" )
		// reverse the array of characters
		.reverse()
		// join the array of characters back to a string
		.join( "" );

		console.log( c );	// oof

		// Remember, this does NOT work for strings with complex
		// characters in them.