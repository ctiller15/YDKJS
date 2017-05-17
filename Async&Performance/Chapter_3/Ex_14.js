// It's not possible for a synchronous chain of tasks to run in
// such a way to in effect "delay" another callback from happening as expected.

p.then( function(){
	p.then( function(){
		console.log( "C" );
	} );
	console.log( "A" );
} );
p.then( function(){
	console.log( "B" );
} );
// A B C

// Here, "C" cannot interrupt and precede "B".
