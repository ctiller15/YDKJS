// A generator itself is not technically an iterable.
// When you execute the generator, you get the iterator back.

function *foo(){ .. }

var it = foo();

// We can implement the something infinite number series producer from earlier with a generator.

function *something() {
	var nextVal;

	while(true) {
		if (nextVal === undefined) {
			nextVal = 1;
		}
		else {
			nextVal = (3 * nextVal) + 6;
		}

		yield nextVal;
	}
}