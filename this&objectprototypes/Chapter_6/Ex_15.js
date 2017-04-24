// As of ES6, we can use concise method declarations in any object literal.
var LoginController = {
	errors: [],
	getUser() { // Look ma, no `function`!
			// ...
	},
	getPassword() {
		// ...
	}
	// ...
};

// Object literals still require  comma separators between elements. Class syntax doesn't.