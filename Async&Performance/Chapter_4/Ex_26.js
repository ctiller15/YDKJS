// Yield pausing also allows the generator to catch an error.

if (err) {
	// throw an error into `*main()`
	it.throw( err );
}