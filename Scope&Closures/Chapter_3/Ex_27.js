// using const with scope.

// const creates a block-scoped variable, but the value is a fixed constant.

var foo = true;

if (foo) {
	var a = 2;
	const b = 3; // block-scoped to the containing 'if'

	a = 3;	// just fine!
	//b = 4;	// error!
	// Remember, you cannot change the value of const variables.
}

console.log( a );	// 3
//console.log( b );	// ReferenceError!
// b is block-scoped by const, so it isn't defined at the global scope.
