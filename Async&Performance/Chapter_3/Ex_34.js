// If a proper valid function is not passed as the fulfilllment handler parameter to then(..),
// there's also a default handler substituted:

var p = Promise.resolve( 42 );

p.then(
	// assumed fulfillment handler, if omitted or
	// any other non-function value passed
	// function(v) {
	// return v;
	//	}
	null,
	function rejected(err){
		// never gets here
	}
);