// Other examples of interesting parseInt behavior, but surprising:

console.log(parseInt( 0.000008 ));		// 0 ("0" from "0.000008")
console.log(parseInt( 0.0000008 ));		// 8 ("8" from "8e-7")
console.log(parseInt( false, 16 ));		// 250 ("fa" from "false")
console.log(parseInt( parseInt, 16 ));	// 15 ("f" from "function..")

console.log(parseInt( "0x10" ));				// 16
console.log(parseInt( "103", 2 ));			// 2