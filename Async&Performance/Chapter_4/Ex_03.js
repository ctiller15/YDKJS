// how can we run the code such that bar() executes at the point of the yield inside of *foo()?

// construct an iterator `it` to control the generator.

var it = foo();

// start `foo()` here!
it.next();
x;
bar();
x;
it.next();