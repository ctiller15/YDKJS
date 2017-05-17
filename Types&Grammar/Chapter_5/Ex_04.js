// How can we capture the completion value and assign it to another variable easily?
// We could use eval(..)

var a, b;

a = eval( "if (true) { b = 4 + 38; }" );

console.log( a );

// Ugly, but it works! Whoo!