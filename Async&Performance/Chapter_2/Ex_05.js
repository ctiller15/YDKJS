// Breaking code down

// First (now), we:

listen( "..", function handler(..){
	// ..
} );

// Then later, we:

setTimeout( function request(..){
	// ..
}, 500) ;

// Then still later, we:

ajax( "..", function response(..){
	// ..
} );

// And finally (most later), we:

if ( .. ) {
	// ..
}
else ..