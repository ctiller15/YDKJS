// Every time you call then(..) on a Promise, it creates and returns a new promise.
// We can chain that promise.

// Whatever value you return from the then(..) call's fulfillment callback
// is automatically set as the fulfillment of the chained Promise.

var p = Promise.resolve(21);

var p2 = p.then( function(v){
	console.log( v );			// 21

	// fulfill `p2` with value `42`
	return v * 2;
} );

// chain off `p2`
p2.then( function(v){
	console.log( v );	// 42
} );