// How would manual transpilation work in the case of generators?

function *foo(url) {
	try {
		console.log( "requesting:", url );
		var val = yield request( url );
		console.log( val );
	}
	catch (err) {
		console.log( "Oops:", err );
		return false;
	}
}

var it = foo( "http://some.url.1" );

// We'll still need a normal foo() function that can be called.
// It will still need to return an iterator.
