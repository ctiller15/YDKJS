// The simplest way of "waiting" from now until later is to use a callback:

// ajax(..) is some arbitrary Ajax function given by a library.
ajax( "http://some.url.1", function myCallbackFunction(data){

	console.log( data );	// Yay, I gots me some `data`!
} );
