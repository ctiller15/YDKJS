// Explicit binding

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj );	// 2

// Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.

// Sadly, explicit binding doesn't solve our problem where a function loses
// its intended this binding.