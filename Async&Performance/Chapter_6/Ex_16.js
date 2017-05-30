// The only exception to preferring the explicit form
// of a let declaration blocking is a let that appears
// in the header of a for loop.

var funcs = [];

for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}

funcs[3]();					// 3

// You could also accomplish this more verbosely:

var funcs = [];

for (var i = 0; i < 5; i++) {
	let j = i;
	funcs.push( function(){
		console.log( j );
	} );
}

funcs[3]();					// 3