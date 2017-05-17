// Expressions can have side effects, like with function calls:

var a = foo() && bar();

// foo() is evaluated first, and then possibly bar().