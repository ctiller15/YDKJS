// oops, this would throw an error!
if (DEBUG) {
	console.log( "Debugging is starting" );
}

// this is a safe existence check
if (typeof Debug !== "undefined") {
	console.log( "Debugging is starting" );
}

// Useful even if you're not dealing with user-defined variables.

// If you're doing a feature check, you may find it helpful
// to check without throwing an error.

if (typeof atob === "undefined") {
	atob = function() { /*..*/ };
}