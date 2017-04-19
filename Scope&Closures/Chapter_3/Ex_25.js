// Another way of illustrating the per-iteration binding behavior.

{
	let j;
	for (j=0; j<10; j++){
		let i = j;	// re-bound for each iteration!
		console.log( i );
	}
}