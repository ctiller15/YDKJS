// It's tempting to use links between objects primarily as fallbacks.

var anotherObject = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.cool();	// "cool!"

// anotherObject was the fallback just in case myObject couldn't handle it.