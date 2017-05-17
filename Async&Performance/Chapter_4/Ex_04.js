// Generators are still functions.
// They can accept arguments and return values.

function *foo(x,y) {
	return x * y;
}

var it = foo( 6, 7 );

var res = it.next();

res.value;			// 42