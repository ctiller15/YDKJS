// A non-recursive setup with tail calls:

function foo(x) {
	return x;
}

function bar(y) {
	return foo( y + 1 );		// tail call
}

function baz() {
	return 1 + bar( 40 );		// not tail call
}

baz();											// 42