// We basically just made the gate that we identified in chapter 3.
// The same as promise.all.

function *foo() {
	// make both requests "in parallel," and
	// wait until both promises resolve
	var results = yield Promise.all( [
		request( "http://some.url.1" ),
		request( "http://some.url.2" )
		] );

		var r1 = results[0];
		var r2 = results[1];

		var r3 = yield request(
			"http://some.url.3/?v=" + r1 + "," + r2
		);

		console.log( r3 );
}

// use the previously defined `run(..)` utility
run( foo );