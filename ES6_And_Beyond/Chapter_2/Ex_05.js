// typeof behaves differently with TDZ variables than it does with undeclared variables:

{
	// `a` is not declared
	if (typeof a === "undefined") {
		console.log( "cool" );
	}

	// `b` is declared, but in its TDZ
	if (typeof b === "undefined") {			// ReferenceError!
			// ..
	}

	// ..

	let b;
}