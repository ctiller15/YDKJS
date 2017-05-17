// The interleaving of parallel threads of execution and the interleaving of
// asynchronous events occur at very different levels
// of granularity.

function later() {
	answer = answer * 2;
	console.log( "Meaning of life:", answer );
}