// A shortcut for creating an already-rejected Promise is Promise.reject

var p1 = new Promise( function(resolve,reject){
	reject( "Oops" );
} );

var p2 = Promise.reject( "Oops" );