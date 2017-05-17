// promise timeout from earlier:

var p = foo( 42 );

Promise.race( [
	p,
	timeoutPromise( 3000 )
] )
.then(
	doSomething,
	handleError
);

p.then( function(){
	// still happens even in the timeout case :(
})