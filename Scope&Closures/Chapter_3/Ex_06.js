// Global namespaces can easily collide.

var myReallyCoolLibrary = {
	awesome: "stuff",
	doSomething: function() {
		// ...
	},
	doAnotherThing: function() {
		// ...
	}
};

// It's better to create an object to contain the library instead.