// yield-delegation can keep following as many delegation steps as you wire up.
// Could even use yield-delegation for async-capable generator "recursion"
// -- a generator yield-delegating to itself:

function *foo(val) {
	if (val > 1) {
		// generator recursion
		val = yield *foo( val - 1 );
	}

	return yield request( "http://some.url/?v=" + val );
}

function *bar() {
	var r1 = yield *foo( 3 );
	console.log( r1 );
}

run ( bar );