// What if the call-site has multiple eligible rules?

// default binding has the lowest priority.

// Explicit vs implicit?

function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo();	// 2
obj2.foo();	// 3

obj1.foo.call( obj2 );	// 3
obj2.foo.call( obj1 );	// 2

// Here we use call to force the inner object to become this.

// Explicit binding takes precedence.
