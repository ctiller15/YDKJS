// To pass a scalar primitive value in a way where its value
// updates can be seen, you have to wrap the value
// in another compound value.

function foo(wrapper) {
	wrapper.a = 42;
}

var obj = {
	a: 2
};

foo( obj );

obj.a;	// 42