// If two promises are both already resolved, it should be true that p1.then(..); p2.then(..) would end up calling the callback(s) for p1 before the ones for p2.

var p3 = new Promise( function(resolve,reject){
	resolve( "B" );
} );

var p1 = new Promise( function(resolve,reject){
	resolve( p3 );
} );

var p2 = new Promise( function(resolve,reject){
	resolve( "A" );
} );

p1.then( function(v){
	console.log( v );
} );

p2.then( function(v){
	console.log( v );
} );

// A B  <-- not B A as you might expect.