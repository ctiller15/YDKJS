// A better example.

function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse( a * 2 );

	console.log( b * 3 );
}

doSomething( 2 ); // 15

// not b and doSomethingElse( .. ) aren't accessible by the outside influences!
// End result unaffected, private details still private!