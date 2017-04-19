// Function declarations that appear inside of normall blocks
// Typically hoist to the enclosing scope.

foo(); // "b"

var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}

// ... is what I would say, but it doesn't seem to work anymore!