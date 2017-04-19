// Hard binding.

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar();	// 2
setTimeout( bar, 100 );	// 2

// 'bar' hard binds 'foo's 'this' to 'obj'
// so that it cannot be overridden
bar.call( window );	// 2

// * Works properly in devtools.

// No matter how later you invoke bar, it will always manually
// invoke foo with obj.