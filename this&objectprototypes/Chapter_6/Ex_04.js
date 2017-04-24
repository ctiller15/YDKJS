// Explaining with javascript mechanisms:

function Foo() {}

var a1 = new Foo();

a1.constructor;	// Foo(){}
a1.constructor.name;	// "Foo"

// Chrome "sorta" examines the object's .constructor.name.