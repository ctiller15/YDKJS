// The internals of bar(..) and baz(..)

function bar(fooPromise) {
	// listen for `foo(..)` to compete
	fooPromise.then(
		function(){
			// `foo(..)` has now finished, so
			// do `bar(..)`'s task
		},
		function(){
			// oops, something went wrong in `foo(..)`
		}
	);
}

// ditto for `baz(..)`