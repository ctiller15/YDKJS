// It's a common misconception that JavaScript has an else if clause, because...

if (a) {
	// ..
}
else if (b) {
	// ..
}
else {
	// ..
}

// there is no else if, but they're allowed to omit the { }
// around their attached block if they only contain a single statement.

// like:

if (a) doSomething( a );

// Many JS style guides will insist that you always use { } around a single statement block.

if (a) { doSomething( a ); }

// The same rules apply to the else clause. The else if we've always coded is actually:

if (a) {
	// ..
}
else {
	if (b) {
		// ..
	}
	else {
		// ..
	}
}