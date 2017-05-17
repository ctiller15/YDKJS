// What happens if we reverse the order of operators?

true || false && false;		// true

(true || false) && false;	// false -- nope
true || (false && false);	// true -- winner, winner!