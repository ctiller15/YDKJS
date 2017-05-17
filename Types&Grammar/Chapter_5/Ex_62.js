// A return inside a finally has the ability to override a previous return
// from the try or catch clause
// only if return is explicitly called:

function foo() {
	try {
		return 42;
	}
	finally {
		// no `return .. ` here, so no override
	}
}

function bar() {
	try {
		return 42;
	}
	finally {
		// override previous `return 42`
		return;
	}
}

function baz() {
	try {
		return 42;
	}
	finally {
		// override previous `return 42`
		return "Hello"
	}
}

foo();	// 42
bar();	// undefined
baz();	// "Hello"