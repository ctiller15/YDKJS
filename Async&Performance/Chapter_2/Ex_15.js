// What about the trust issue of never being called?

function timeoutify(fn,delay) {
	var intv = setTimeout( function(){
		intv = null;
		fn( new Error( "Timeout!" ) );
	}, delay );

	return function() {
		// timeout hasn't happened yet?
		if (intv) {
			clearTimeout( intv );
			fn.apply( this, [ null ].concat( [].slice.call( arguments ) ) );
		}
	};
}

// And how to use it:

// using "error-first style" callback design
function foo(err,data) {
	if (err) {
		console.error( err );
	}
	else {
		console.log( data );
	}
}

ajax( "http://some.url.1", timeoutify( foo, 500 ) );