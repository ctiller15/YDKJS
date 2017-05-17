// What happens if a promise is fulfilled, but there's a JS exception error during the observation (in a then(..) registered callback)?
// Not lost, but a bit surprising until you dig:

var p = new Promise( function(resolve,reject){
	resolve( 42 );
} );

p.then(
	function fulfilled(msg){
		foo.bar();
		console.log( msg );		// never gets here :(
	},
	function rejected(err){
		// never gets here either :(
	}
);