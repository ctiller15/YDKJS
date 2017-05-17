// How do we throw errors out of a generator?

function *main() {
	var x = yield "Hello World";

	yield x.toLowerCase();	// cause an exception!
}

var it = main();

it.next().value;				// Hello World

try {
	it.next( 42 );
}
catch (err) {
	console.error( err );		// TypeError
}