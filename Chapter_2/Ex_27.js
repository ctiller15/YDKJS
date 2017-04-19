// comparing the immediately invoked function expression to the regular function.

function foo() { .. }

// `foo` function reference expression,
// then `()` executes it.
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ .. })();

