// The other major case where ASI kicks in is with break, continue, return, and yield.

function foo(a) {
	if (!a) return
		a *= 2;
		// ..
}

// return doesn't carry to a *= 2