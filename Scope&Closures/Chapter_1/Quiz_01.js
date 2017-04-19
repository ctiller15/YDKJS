function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

/*
LHS ( 3 ):
-LHS reference for a. "a = 2"
-LHS reference in assigning value of a to b. " b = .."
-LHS reference in assigning the value of 'foo' to 'c'. "c = .."

RHS ( 4 ):

-RHS reference for foo. "foo(2.."
-RHS reference in line 2, for 'a' in b = a " = a;"
-RHS reference in returning a. " a + .."
-RHS reference in returning b. ".. + b"


*/