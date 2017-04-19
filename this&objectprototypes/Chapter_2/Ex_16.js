// new Binding
// The last rule!

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );	// 2

// By calling foo(..) with new in front of it, we've constructed a new object
// and set that new object as the this for the call of foo.
// new is the final way that a function call's this can be bound.
// We'll call this new binding.