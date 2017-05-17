// Could invasively define resolution callbacks:

var OK = true;

var p = foo( 42 );

Promise.race( [
	p,
	timeoutPromise( 3000 )
	.catch( function(err){
		OK = false;
		throw err;
	} )
] )
.then(
	doSomething,
	handleError
);

p.then( function(){
	if (OK) {
		// only happens if no timeout! :)
	}
} );