// An Ajax response handler that needs to run through a long list of results to transform the values.

var res = [];

// `response(..)` receives array of results from Ajax all.
function response(data) {
	// add onto existing `res` array
	res = res.concat(
		// make a new transformed array with all `data` values doubled.
		data.map( function(val){
			return val * 2;
		} )
	);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );