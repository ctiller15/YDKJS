// generators which yield Promises for async could instead
// yield thunks for async. We'd just need a smarter run utility.

function *foo() {
	var val = yield request( "http://some.url.1" );
	console.log( val );
}


run( foo );

// request(..) could be either:

// promisory `request(..)` (see Chapter 3)
var request = Promise.wrap( ajax );

// vs.

// thunkory `request(..)`
var request = thunkify( ajax );

// finally, as a thunk-aware patch to the earlier run...

// ..
// did we receive a thunk back?
else if (typeof next.value == "function") {
	return new Promise( function(resolve,reject){
		// call the thunk with an error-first callback
		next.value( function(err,msg) {
			if (err) {
				reject( err );
			}
			else {
				resolve( msg );
			}
		} );
	} )
	.then(
		handleNext,
		function handleErr(err) {
			return Promise.resolve(
				it.throw( err )
			)
			.then( handleResult );
		}
	);
}