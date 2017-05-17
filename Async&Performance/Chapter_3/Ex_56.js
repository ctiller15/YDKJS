// The revealing constructor must be used with new.
// It must be provided a function callback that is synchronously called.

var p = new Promise( function(resolve,reject){
	// `resolve(..)` to resolve/fulfill the promise
	// `reject(..)` to reject the promise
} );