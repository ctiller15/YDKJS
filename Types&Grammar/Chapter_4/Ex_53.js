// If you're avoiding implicit coercion, you need to make all tests explicit!

if (!!a && (!!b || !!c)) {
	console.log( "yep" );
}

// Nah.