// Hiding your promise logic inside a function that you call from your generator is
// especially useful if you're going to do a sophisticated series flow-control.

function bar() {
	return Promise.all( [
		baz( .. )
		.then( .. ),
		Promise.race( [ .. ] )
		] )
	.then( .. )
}