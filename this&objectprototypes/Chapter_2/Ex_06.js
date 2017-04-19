// it can be frustrating when an implicitly bound function loses that binding.
// It will then fall back to the default binding.

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo;	// function reference/alias!

var a = "oops, global";	// 'a' also property on global object

bar();	// "oops, global"

// bar is really just a reference to foo itself. Not obj.foo
// The call-site is all that matters, and the call-site is bar().
// bar() is plain and undecorated. (No object calling bar) Default binding applies.

// * Works in devtools, does not output "oops, global" in sublime text.