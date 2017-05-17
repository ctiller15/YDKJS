// modifying the built-in native prototypes can produce crazy results!

Number.prototype.valueOf = function() {
	return 3;
};

console.log(new Number( 2 ) == 3);	// true

// another tricky example:

if ( a == 2 && a == 3) {
	// ..
}