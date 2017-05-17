// For..of loop automatically calls symbol.iterator to construct an iterator.
// We could call the function manually, and use the iterator it returns:

var a = [1,3,5,7,9];

var it = a[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);