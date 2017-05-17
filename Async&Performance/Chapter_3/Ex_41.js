// In callbacks, some standards have emerged for patterned error handling.

function foo(cb) {
	setTimeout( function(){
		try {
			var x = baz.bar();
			cb( null, x );	// success!
		}
		catch (err) {
			cb( err );
		}
	}, 100 );
}

foo( function(err,val){
	if (err) {
		console.error( err );	// bummer :(
	}
	else {
		console.log( val );
	}
} );