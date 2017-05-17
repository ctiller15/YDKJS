// If you call then(..) on a promise, and you only pass a fulfillment handler to it, an assumed rejection handler is substituted:

var p = new Promise( function(resolve,reject){
	reject( "Oops" );
} );

var p2 = p.then(
	function fulfilled(){
		// never gets here
	}
	// asssumed rejection handler, if omitted or
	// any other non-function value passed
	// function(err) {
	// throw err;
	// }
);