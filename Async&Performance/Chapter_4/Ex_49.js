// Instead of having to manually sort out res[0] and res[1] assignments, we'll
// use coordinated ordering so that res.push(..) properly slots the values in the expected and
// predictable order:

var it1 = reqData( "http://some.url.1" );
var it2 = reqData( "http://some.url.2" );

var p1 = it1.next().value;
var p2 = it2.next().value;

p1
.then( function(data){
	it1.next( data );
	return p2;
} )
.then( function(data){
	it2.next( data );
} );