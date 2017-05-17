// The duck typing check for a thenable would roughly be:

if (
	p !== null &&
	(
		typeof p === "object" ||
		typeof p === "function"
		) &&
		typeof p.then === "function"
	) {
		// assume it's a thenable!
	}
	else {
		// not a thenable
	}