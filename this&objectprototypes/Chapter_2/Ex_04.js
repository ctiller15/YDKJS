// Implicit binding.
// Does the call site have an owning/containing object?

function foo() {
	// The function isn't owned or contained by the obj object.
	console.log( this.a );
}

var obj = {
	a: 2,
	// Here the call site of foo is within the object.
	// The call site uses the obj context to reference the function.
	// It "owns" the function reference.
	foo: foo
};

obj.foo(); // 2, hey! This actually works in sublime as well!

// When foo is called, it's preceded by an object reference to obj.
// The implicit binding rule says that object gets used for the this binding.