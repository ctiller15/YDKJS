// Some native prototypes aren't just plain objects.

typeof Function.prototype;			// "function"
Function.prototype();				// it's an empty function!

RegExp.prototype.toString();		// "/(>:)/" -- empty regex
"abc".match( RegExp.prototype );	// [""]