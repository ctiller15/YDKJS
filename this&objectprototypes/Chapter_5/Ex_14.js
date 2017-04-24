// The pre-ES6 and ES6 standard techniques for linking
// Bar.prototype to Foo.prototype:

// pre-ES6
// throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );

// ES6+
// modifies existing `Bar.prototype`
Object.setPrototypeOf( Bar.prototype, Foo.prototype );