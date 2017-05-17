// If at any point in the creation of a Promise, or in the observation of its resolution, a JS exception error occurs, that exception will be caught
// Will force the promise to become rejected.

var p = new Promise( function(resolve,reject){
	foo.bar();		// `foo` is not defined, so error!
	resolve( 42 );	// never gets here :(

} );

p.then(
	function fulfilled(){
		// never gets here :(
	},
	function rejected(err){
		// `err` will be a `TypeError` exception object
		// from the `foo.bar()` line
	}
);