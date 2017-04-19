// It is possible to define your own default iterator for any object that
// you care to iterate over.

var myObject = {
	a: 2,
	b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );

// iterate `myObject` manually
var it = myObject[Symbol.iterator]();
console.log(it.next());	// { value: 2, done: false }
console.log(it.next());	// { value: 3, done: false }
console.log(it.next());	// { value: undefined, done: true }

// iterate `myObject` with `for...of`
for (var v of myObject) {
	console.log( v );
}
// 2
// 3