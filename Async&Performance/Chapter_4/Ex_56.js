// The thunkify(..) utility would produce a function that produces thunks.

function thunkify(fn) {
	return function() {
		var args = [].slice.call( arguments );
		return function(cb) {
			args.push( cb );
			return fn.apply( null, args );
		};
	};
}

// The main difference is the extra return function later.
// Here's how it works:

var whatIsThis = thunkify( foo );

var fooThunk = whatIsThis( 3, 4 );

// later

fooThunk( function(sum) {
	console.log( sum );					// 7
} );