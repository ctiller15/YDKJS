// Shadowing can occur implicitly in subtle ways:

var anotherObject = {
	a: 2
};

var myObject = Object.create( anotherObject );

anotherObject.a;	// 2
myObject.a; // 2

anotherObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( "a" );	// false

myObject.a++;	// oops, implcit shadowing!

anotherObject.a;	// 2
myObject.a;	// 3

myObject.hasOwnProperty( "a" );	// true

// the ++ op corresponds to myObject.a = myObject.a + 1.

// 3 was assigned to the new shadowed property a on myObject.

// only proper way to increment anotherObject.a is with anotherObject.a++