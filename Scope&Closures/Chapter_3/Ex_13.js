// In the end IIFE's are just function calls.
// You can pass in arguments!


// This will only work in browser. Not in console.
var a = 2;

(function IIFE( global ){
	var a = 3;
	console.log( a );	// 3
	console.log( global.a );	// 2
})( window );

console.log( a ); // 2