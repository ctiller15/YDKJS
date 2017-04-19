// Invoking function expressions Immediately.

var a = 2;

(function foo(){

	var a = 3;
	console.log( a );	// 3

})();

console.log( a );	// 2

// first enclosing () pair makes the function an expression. The second executes the function.