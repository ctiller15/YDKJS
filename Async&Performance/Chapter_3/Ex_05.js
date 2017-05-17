// With callbacks, the "notification" would be our callback
// invoked by the task ( foo(..) ).
// with promises, the relation is turned around.
// We listen for an event from foo, and then proceed.

foo(x) {
	// start doing something that could take a while
}

foo( 42 )

on (foo "completion") {
	// now we can do the next step!
}

on (foo "error") {
	// oops, something went wrong in `foo(..)`
}