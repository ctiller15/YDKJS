// use the null/und coercion to allow them to be indistinguishable.

var a = doSomething();

if (a == null) {
	// ..
}

// The explicit version of this check:

var a = doSomething();

if (a === undefined || a === null) {
	// ..
}