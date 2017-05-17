// A utility called runAll(..):

// `request(..)` is a Promise-aware Ajax utility

var res = [];

runAll(
	function*(){
		var p1 = request( "http://some.url.1" );

		// transfer control
		yield;

		res.push( yield p1 );
	},
	function*(){
		var p2 = request( "http://some.url.2" );

		// transfer control
		yield;

		res.push( yield p2 );
	}
);