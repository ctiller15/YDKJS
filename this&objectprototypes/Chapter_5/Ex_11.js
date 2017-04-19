// You can add .constructor back to the Foo.prototype object.
// This takes manual work.

function Foo() { /* .. */ }

Foo.prototype = { /* .. */ };	// create a new prototype object.

// Need to properly "fix" the missing `.constructor`
// property on the new object serving as `Foo.prototype`.
// See chapter 3 for `defineProperty(..)`.
Object.defineProperty( Foo.prototype, "constructor" , {
	enumerable: false,
	writable: true,
	configurable: true,
	value: Foo	// point `.constructor` at `Foo`
} );