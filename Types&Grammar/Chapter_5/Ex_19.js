// JS supports a limited form of goto, labeled jumps.

// `foo` labeled-loop
foo: for (var i=0; i<4; i++) {
	for (var j=0; j<4; j++) {
		// whenever the loops meet, continue outer loop.
		if (j == i) {
			// jump to the next iteration of the `foo` labeled loop.
			continue foo;
		}
	}	// skip odd multiples
	if ((j * i) % 2 == 1) {
		// normal (non-labeled) `continue` of inner loop
		continue
	}

	console.log( i, j );
}

// 1 0
// 2 0
// 2 1
// 3 0
// 3 2