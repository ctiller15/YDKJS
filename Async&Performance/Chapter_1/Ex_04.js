// There were two chunks to exercise 3. The parts that run "now",
// and the parts that run "later".


// Now:
function now() {
	return 21;
}

function later() { .. }

var answer = now();

setTimeout( later, 1000 );

// Later:

answer = answer * 2;
console.log( "Meaning of life:", answer );

// "Now" runs right away.
// setTimeout sets an event to happen later.