// It might be helpful to further extend runAll(..) to provide an inner variable space for the
// multiple generator instances to share, such as the empty object.
// Could take non-promise values that are yielded and hand them
// off to the next generator.

// `request(..)` is a Promise-aware Ajax utility

runAll(
	function*(data){
		data.res = [];

		// transfer control (and message pass)
		var url1 = yield "http://some.url.2";

		var p1 = request( url1 );	// "http://some.url.1"

		// transfer control
		yield;

		data.res.push( yield p1 );
	},
	function*(data){
		// transfer control (and message pass)
		var url2 = yield "http://some.url.1";

		var p2 = request( url2 );	// "http://some.url.2"

		// transfer control
		yield;

		data.res.push( yield p2 );
	}
);