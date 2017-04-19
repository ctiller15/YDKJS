// Default Binding, the first rule.
// The default catch-all rule when none of the others apply.


// In devtools, it outputs "2" followed by "undefined"
// In sublime, it outputs "undefined".

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2

// when foo is called, this.a resolves to our global variable a.
// The default binding for this applies to the function call.
