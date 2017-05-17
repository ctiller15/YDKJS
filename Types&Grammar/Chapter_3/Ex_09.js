// Unboxing
// If you have an object wrapper and you want to get the underlying
// primitive value out, you can use valueOf()

var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );

console.log(a);	// [String: 'abc']
console.log(b);	// [Number: 42]
console.log(c);	// [Boolean: true]

console.log( a.valueOf() );	// "abc"
console.log( b.valueOf() );	// 42
console.log( c.valueOf() );	// true