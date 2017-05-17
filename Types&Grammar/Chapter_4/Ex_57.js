// Strict equality is safe from hidden coercion.

var a = "42";

// bad (will fail!):
if (a === true) {
	// ..
}

// good enough (works implicitly):
if (a) {
	// ..
}

// better (works explicitly):
if (!!a) {
	// ..
}

// also great( works explicitly):
if (Boolean( a )) {
	// ..
}