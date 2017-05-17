// ES6 offers the array parameter destructuring form:

Promise.all(
	foo( 10, 20 )
)
.then( function([x,y]){
	console.log( x, y );	// 200 599
} );