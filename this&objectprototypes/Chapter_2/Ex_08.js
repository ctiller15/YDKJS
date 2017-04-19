// What if the function isn't your own, but is built-in to the language?

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global";	// 'a' also property on global object.

setTimeout( obj.foo, 100 );	// "oops, global"

// Call-site is in setTimeout, so we still get default binding.

// As before, works in devtools, doesn't log properly in sublime.