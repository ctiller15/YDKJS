// How do IIFE's fit in?

var a = 2;

(function IIFE(){
	console.log( a ); // 2
})();

// code works, but not strictly an observation of closure.

// Function is not executed outside its lexical scope.

// IIFE is not itself an example of closure, but it creates scope.