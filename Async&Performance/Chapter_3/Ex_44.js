// To avoid losing an error to the silence of a forgotten/discarded Promise,
// some devs have claimed that a "best practice"
// is to end Promise chains with a final catch

var p = Promise.resolve( 42 );

p.then(
	function fulfilled(msg){
		// numbers don't have string functions,
		// so will throw an error
		console.log( msg.toLowerCase() );
	}
)
.catch( handleErrors );