// The most prevalent way to create block scope was
// the immediately invoked function expression:

var a = 2;

(function IIFE(){
	var a = 3;
	console.log( a );			// 3
})();

console.log( a );				// 2