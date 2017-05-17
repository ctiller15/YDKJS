// Let's make a helper called step(..) that controls an iterator:

function step(gen) {
	var it = gen();
	var last;

	return function() {
		// whatever is `yield`ed out, just
		// send it right back in the next time!
		last = it.next( last ).value;
	};
}

function *foo() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}

function *bar() {
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);
}

// let's experiment to see the effects of interleaving these different
// chunks of *foo() and *bar().

// make sure to reset `a` and `b`
a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar );

// run `*foo()` completely first
s1();
s1();
s1();

// now run `*bar()`
s2();
s2();
s2();
s2();

console.log( a, b );		// 11 22

// Let's mix up the interleaving ordering and see how
// it changes the final values of a and b:

// make sure to reset `a` and `b`
a = 1;
b = 2;

var s1 = step( foo );
var s2 = step( bar );

s2();				// b--;
s2();				// yield 8
s1();				// a++;
s2();				// a = 8 + b;
							// yield 2
s1();				// b = b * a;
							// yield b
s1();				// a = b + 3;
s2();				// b = a * 2