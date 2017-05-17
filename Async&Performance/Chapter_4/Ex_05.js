// In addition to accepting arguments and having return values,
// there's more powerful/compelling input/output built into them.
// via yield and next(..)

function *foo(x) {
	var y = x * (yield);
	return y;
}

var it = foo( 6 );

// start `foo(..)`
it.next();
var res = it.next( 7 );

res.value;		// 42