// We can pass either of those versions of p to Promise.resolve(..)
// We get a normalized, safe result:

Promise.resolve( p )
.then(
	function fulfilled(val){
		console.log( val );	// 42
	},
	function rejected(err){
		// never gets here
	}
);