// A scenario where you need to fetch data from two different sources, then combine those responses to make a third request,
// finally print out the last response.

function *foo() {
	var r1 = yield request( "http://some.url.1" );
	var r2 = yield request( "http://some.url.2" );

	var r3 = yield request(
		"http://some.url.3/?v=" + r1 + "," + r2
		);

	console.log( r3 );
}

// use previously defined `run(..)` utility
run( foo );

// Works, but not optimal!