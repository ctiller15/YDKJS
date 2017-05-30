// subtle gotchas to be aware of w/ convenience shorthand.


function runSomething(o) {
	var x = Math.random(),
		y = Math.random();

		return o.something( x, y );
}

runSomething( {
	something: function something(x,y) {
		if (x > y) {
			// recursively call with `x`
			// and `y` swapped
			return something( y, x );
		}

		return y - x;
	}
} );

// Silly, but let's look at how it's defined:

runSomething( {
	sommething: function something(x,y) {
		// ..
	}
} );