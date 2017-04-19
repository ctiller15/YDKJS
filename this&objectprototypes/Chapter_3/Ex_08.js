// There is nothing special about a function that comes from property access.

function foo() {
	console.log( "foo" );
}

var someFoo = foo;	// variable reference to `foo`

var myObject = {
	someFoo: foo
};

console.log(foo);			// function foo(){..}

console.log(someFoo);		// function foo(){..}

console.log(myObject.someFoo);	// function foo(){..}

// All three log "[Function: foo]" on my javascript build.