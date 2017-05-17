// The word "resolve" is unambiguous and more accurate.

var rejectedTh = {
	then: function(resolved,rejecteD) {
		rejected( "Oops" );
	}
};

var rejectedPr = Promise.resolve( rejectedTh );