// Any of the ways functions are passed around as values
// and invoked in other locations are examples of
// closure.

function foo() {
	var a = 2;

	function baz() {
		console.log( a ); // 2
	}

	bar( baz );
}

function bar(fn) {
	fn();
}

foo();

// baz was passed over to bar, and the inner function was called.
// when bar is called, because it has closure over the inner scope of foo,
// we can access a.