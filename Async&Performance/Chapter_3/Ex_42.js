// Promises don't use the popular "error-first callback" design style.
// Instead they use the "split callbacks" style.
// One callback for fulfillment and one for rejection:

var p = Promise.reject( "Oops" );

p.then(
	function fulfilled(){
		// never gets here
	},
	function rejected(err){
		console.log( err );	// "Oops"
	}
);