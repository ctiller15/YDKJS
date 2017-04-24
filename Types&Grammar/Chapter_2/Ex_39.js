// The reverse operations don't lie!

console.log(+"-0");					// -0
console.log(Number( "-0" ));		// -0
console.log(JSON.parse( "-0" ));	// -0