// Let's manually iterate the array using the built-in "@@iterator"

var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();

console.log(it.next());	// { value: 1, done: false }
console.log(it.next());	// { value: 2, done: false }
console.log(it.next());	// { value: 3, done: false }
console.log(it.next());	// { value: undefined, done: true}

// @@iterator is not the iterator object itself,
// it is a function that returns the iterator object!