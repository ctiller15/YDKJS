// Block scoping revisited

// Let hijacks a block and declares a variable right in the block.

// In other words, the block becomes a scope we can close over.

for (var i=1; i<=5; i++) {
	let j = i;	// yay, block-scope for closure!
	setTimeout( function timer(){
		console.log( j );
	}, j*1000) ;
}