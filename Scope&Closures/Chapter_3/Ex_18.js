// Using try/catch.

try {
	undefined(); // illegal operation to force an exception!
}
catch (err) {
	console.log( err ); // works!
}

console.log( err ); // ReferenceError: 'err' not found.

// err only exists in the catch clause.
// Throws an error when you try to reference it elsewhere.
