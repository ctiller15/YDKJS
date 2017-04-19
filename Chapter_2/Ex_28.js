// A use case for IIFE.

// It is often used to declare variables that won't affect the surrounding code.

var a = 42;

(function IIFE(){
	var a = 10;
	console.log( a );		// 10
})();

console.log( a )			// 42