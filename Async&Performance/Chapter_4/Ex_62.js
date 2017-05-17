// We'll still need a normal foo() function that can be called.
// it will still need to return an iterator.

function foo(url) {

	// ..

	// make and return an iterator
	return {
		next: function(v) {
			// ..
		},
		throw: function(e) {
			// ..
		}
	};
}

var it = foo( "http://some.url.1" );