// We can coordinate interactions with a latch to let only the first
// one through:

var a;

function foo(x) {
	if (a == undefined) {
		a = x * 2;
		baz();
	}
}

function bar(x) {
	if (a == undefined) {
		a = x / 2;
		baz();
	}
}

function baz() {
	console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library.
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );