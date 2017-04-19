// One of the most common ways that indirect
// references occur is from an assignment:

function foo() {
	console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo();	// 3
(p.foo = o.foo)();	// 2	
/* It works in devtools, not in the javascript build!*/