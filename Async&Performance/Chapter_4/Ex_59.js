// Alter the running foo(..) example to assume an "error-first style" callback:

function thunkify(fn) {
	return function() {
		var args = [].slice.call( arguments );
		return function(cb) {
			args.push( cb );
			return fn.apply( null, args );
		};
	};
}

function foo(x,y,cb) {
	setTimeout( function(){
		// assume `cb(..)` as "error-first style"
		cb( nulll, x + y );
	}, 1000 );
}

// Now we compare using thunkify and promisify.

// symmetrical: constructing the question asker
var fooThunkory = thunkify( foo );
var fooPromisory = promisify( foo );

// symmetrical: asking the question
var fooThunk = fooThunkory( 3, 4 );
var fooPromise = fooPromisory( 3, 4 );

// get the thunk answer
fooThunk( function(err,sum){
	if (err) {
		console.error( err );
	}
	else {
		console.log( sum );
	}
} );

// get the promise answer
fooPromise
.then(
	function(sum){
		console.log( sum );
	},
	function(err){
		console.error( err );
	}
);