// Introspection

function Foo() {
	// ...
}

Foo.prototype.blah = ...;

var a = new Foo();

// We want to introspect a to find out its "ancestry".

// First approach embraces "class" confusion.

a instanceof Foo;	// true

// the instanceof operator takes a plain object as its left-hand operand and a function as its right-hand operand.

// It answers: "in the entire prototype chain of a, does the object
// arbitrarily pointed to by Foo.prototype ever appear?"

// Sadly, we can only inquire about the "ancestry" of some object (a) if we have some function (Foo) with its attached prototype reference to test with.