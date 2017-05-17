// In our transpiled generator, let's define a variable state in the closure we can use to keep
// track of the state:

function foo(url) {
	// manage generator state
	var state;

	// ..
}

// Now let's define an inner func called process(..)
// It handles each state using a switch statement.

// `request(..)` is a Promise-aware Ajax utility

function foo(url) {
	// manage generator state
	var state;

	// generator-wide variable declarations
	var val;

	function process(v) {
		switch (state) {
			case 1:
				console.log( "requesting:", url );
				return request( url );
			case 2:
				val = v;
				console.log( val );
				return;
			case 3:
				var err = v;
				console.log( "Oops:", err );
				return false;
			}
		}
		/ ..
}