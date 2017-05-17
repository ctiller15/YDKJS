// How does a && b || c behave?

(false && true) || true;	// true
false && (true || true);	// false

false && true || true;		// true
(false && true) || true;	// true

// "&&" is evaluated first.