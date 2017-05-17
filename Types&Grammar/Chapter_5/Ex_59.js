// The same behavior is true of a throw inside try:

function foo() {
	try {
		throw 42;
	}
	finally {
		console.log( "Hello" );
	}

	console.log( "never runs" );
}

console.log( foo() );
// Hello
// Uncaught Exception: 42