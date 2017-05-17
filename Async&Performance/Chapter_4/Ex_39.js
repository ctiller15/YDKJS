// One may try to call one generator from another generator, using the run(..) helper.

function *foo() {
	var r2 = yield request( "http://some.url.2" );
	var r3 = yield request( "http://some.url.3/?v=" + r2 );

	return r3;
}

function *bar() {
	var r1 = yield request( "http://some.url.1" );

	// "delegating" to `*foo()` via `run(..)`
	var r3 = yield run( foo );

	console.log( r3 );
}

run( bar );