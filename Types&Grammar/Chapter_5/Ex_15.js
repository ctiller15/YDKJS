// Another scenario:

function vowels(str) {
	var matches;

	if (str) {
		// pull out all the vowels
		matches = str.match( /[aeiou]/g );

		if (matches) {
			return matches;
		}
	}
}

console.log(vowels( "Hello World!" ));	// [ 'e', 'o', 'o']