// Instances of classes are constructed by constructors.

class CoolGuy {
	specialTrick = nothing

	CoolGuy( trick ){	// This is our constructor.
		specialTrick = trick
	}

	showOff() {
		output( "Here's my trick ", specialTrick )
	}
}

// To make it an instance, we would call the class constructor:

Joe = new CoolGuy( "jumping rope" )

Joe.showOff()	// Here's my trick: jumping rope

// The constructor of a class belongs to the class,
// almost universally with the same name as the class.
// They almost always need to be called with new to let the engine
// know you want to construct a new class instance.