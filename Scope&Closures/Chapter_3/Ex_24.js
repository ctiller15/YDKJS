// let loops.

for (let i=0; i<10; i++) {
	console.log( i );
}

console.log( i ); //ReferenceError

// binds i to the for-loop body, and then
// re-binds it to each iteration of the for loop.
