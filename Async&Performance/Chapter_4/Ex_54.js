// What about an async thunk?

function foo(x,y,cb) {
	setTimeout( function(){
		cb( x + y );
	}, 1000 );
}

function fooThunk(cb) {
	foo( 3, 4, cb );
}

// later

fooThunk( function(sum){
	console.log( sum );			// 7
} );