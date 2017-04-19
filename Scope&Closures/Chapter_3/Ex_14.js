// Naming a parameter undefined, but don't pass any value for the argument.

undefined = true;	// setting a landmine for other code. AVOID!

(function IIFE( undefined ){

	var a;
	if (a === undefined) {
		console.log( "Undefined is safe here!" );
	}
})();
