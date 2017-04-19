// A program with both LHS and RHS references:

// The LHS function, assigns foo to the function object?
function foo(a) {
	// RHS, pulling whatever the current value of a is.
	console.log( a ); // 2
}

// LHS, assigning the value 2 to the variable a.
foo( 2 );
// This is also a RHS function call. The function foo has already been declared.
// We're saying to pull out the function.