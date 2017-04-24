// What does chrome do?

function Foo() {}

var a1 = new Foo();

Foo.prototype.constructor = function Gotcha(){};

console.log(a1.constructor);	// Gotcha(){}
console.log(a1.constructor.name);	// Gotcha

console.log(a1);	// Gotcha {}

// Works better in devtools.

// Even though we change a1.constructor.name to be something else,
// Chrome's console still uses the "Foo" name.