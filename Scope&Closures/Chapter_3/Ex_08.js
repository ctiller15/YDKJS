var a = 2;

(function foo(){	// insert this

	var a = 3;
	console.log( a );	// 3
})();	// and this.

console.log( a );		// 2

// Prevents foo from polluting scope. Automatically executes...?

// wrapping in parentheses makes it a function expression instead of just a function.
