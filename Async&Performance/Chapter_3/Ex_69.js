// You'd probably need to invert the paradigm, creating a whole new Promise chain for each
// event firing:

click( "#mybtn", function(evt){
	var btnID = evt.currentTarget.id;

	request( "http://some.url.1/?id=" + btnID )
	.then( function(text){
		console.log( text );
	} );
} );

// This WILL work.