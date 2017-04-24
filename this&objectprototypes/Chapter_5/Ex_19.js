// Object.create(..) is a hero!

var foo = {
	something: function() {
		console.log( "Tell me something good..." );
	}
};

var bar = Object.create( foo );

bar.something();	// Tell me something good...

// Object.create(..) creates a new object (bar) linked to
// the object we specified (foo)

// We get all the power of prototype without any unnecessary complication.