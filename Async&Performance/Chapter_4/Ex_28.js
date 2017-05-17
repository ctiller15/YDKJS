// We can catch the same error that we throw into the generator.
// This is essentially giving the generator a chance to handle it.
// if it doesn't, the iterator code must handle it.

function *main() {
	var x = yield "Hello World";

	// never gets here
	console.log( x );
}

var it = main();

it.next();

try {
	// will `*main()` handle this error? we'll see!
	it.throw( "Oops" );
}
catch (err) {
	// nope, didn't handle it!
	console.error( err );						// Oops
}