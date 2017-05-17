// messages can go in both directions.
// yield can send out messages in response to next calls.
// next can send values to a paused yield expression.

function *foo(x) {
	var y = x * (yield "Hello");	// <-- yield a value!
	return y;
}

var it = foo( 6 );

var res = it.next();		// first `next()`, don't pass anything
res.value;						// "Hello"

res = it.next( 7 );				// pass `7` to waiting `yield`
res.value;								// 42