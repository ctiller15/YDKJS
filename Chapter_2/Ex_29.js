// Example of a return value with an IIFE.

var x = (function IIFE(){
	return 42;
	// Returns and then assigns to x.
})();

console.log( x ); 			// logs 42.