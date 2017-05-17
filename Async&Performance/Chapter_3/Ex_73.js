// We need a promisory for both ajax and foo.

// make a promisory for `ajax(..)`
var request = Promise.wrap( ajax );

// refactor `foo(..)`, but keep it externally
// callback-based for compatibility with other
// parts of the code for now -- only use
// `request(..)`'s promise internally.
function foo(x,y,cb) {
	request(
		"http://some.url.1/?x=" + x + "&y=" + y

		)
		.then(
			function fulfilled(text){
				cb( null, text );
			},
			cb
			);
}

// now, for this code's purposes, make a 
// promisory for `foo(..)`
var betterFoo = Promise.wrap( foo );

// and use the promisory
betterFoo( 11, 31 )
.then(
	function fulfilled(text){
		console.log( text );
	},
	function rejected(err){
		console.error( err );
	}
);