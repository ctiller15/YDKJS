// If you construct a Promise chain with no error handling in it, any error will propagate inefinitely.
// Having a reference to the last promise in the chain is enough.

// `foo(..)`, `STEP2(..)` and `STEP3(..)` are
// all promise-aware utilities.

var p = foo( 42 )
.then( STEP2 )
.then( STEP3 );