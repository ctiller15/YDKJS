// We first define a request(..) utility that constructs a promise to represent the completion of the ajax(..) call:

request( "http://some.url.1/" )
.then( function(response1){
	return request( "http://some.url.2/?v=" + response1 );
} )
.then( function(response2){
	console.log( response2 );
} );