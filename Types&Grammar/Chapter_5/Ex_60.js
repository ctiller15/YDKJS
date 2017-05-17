// If an exception is thrown inside a finally clause,
// it will override as the primary completion of that function.
// If a previous return in the try block had set a completion value for
// the function, that value will be abandoned.

function foo() {
	try {
		return 42;
	}
	finally {
		throw "Oops!";
	}

	console.log( "never runs" );
}

console.log( foo() );
// Uncaught Exception: Oops!