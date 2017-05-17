// The return statement doesn't carry across the newline to the a *= 2 expression.

// return statements can easily break across multiple lines.

function foo(a) {
	return (
		a * 2 + 3 / 12
	);
}