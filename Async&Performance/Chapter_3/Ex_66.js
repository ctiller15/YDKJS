// ES6 has destructuring:

Promise.all(
	foo( 10, 20 )
)
.then( function(msgs){
	var [x,y] = msgs;

	console.log( x, y );	// 200 599
} );