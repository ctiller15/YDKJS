// TDZ violation can occur with ES6 default parameter values:

var b = 3;

function foo( a = 42, b = a + b + 5 ) {
	// ..
}

// the b reference would happen for the parameter b.
// It will throw an error.

// a is fine since it's past the TDZ for parameter a.