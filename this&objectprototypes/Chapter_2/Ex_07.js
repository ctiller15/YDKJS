// when we pass a callback function losing the implicit binding is more subtle.

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// 'fn' is just another reference to 'foo'

	fn();	// <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global";	// 'a' also property on global object.

doFoo( obj.foo );	// "oops, global"

// parameter passing is just an implicit assignment.
// Since we're passing a function, it's an implicit reference assignment.

// * Only logs properly in devtools right now. Does not output text
// in sublime.