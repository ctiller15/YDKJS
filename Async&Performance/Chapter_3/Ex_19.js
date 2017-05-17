// If you pass an immediate, non-promise, non-thenable alue to Promise.resolve(..), you get a promise that's fulfilled with that value.

var p1 = new Promise( function(resolve,reject){
	resolve( 42 );
} );

var p2 = Promise.resolve( 42 );

// But if you pass a genuine promise to Promise.resolve(..),
// you just get the same promise back:

var p1 = Promise.resolve( 42 );

var p2 = Promise.resolve( p1 );

p1 === p2;	// true