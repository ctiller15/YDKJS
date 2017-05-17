// What if what you got back looked like:

var p = {
	then: function(cb,errcb) {
		cb( 42 );
		errcb( "evil laugh" );
	}
};

p.then(
	function fulfilled(val){
		console.log( val );	// 42
	},
	function rejected(err){
		// oops, shouldn't have run
		console.log( err );	// evil laugh
	}
);