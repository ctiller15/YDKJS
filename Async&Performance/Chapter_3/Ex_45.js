// Any exception inside a done(..) rejection handler would be thrown as a global uncaught error.

var p = Promise.resolve( 42 );

p.then(
	function fulfilled(msg){
		// numbers don't have string functions,
		// so will throw an error
		console.log( msg.toLowerCase() );
	}
)
.done( null, handleErrors );

// if `handleErrors(..)` caused its own exception, it would
// be thrown globally here