// You can also see {..} pairs showing up with destructuring assignments.

function getData() {
	// ..
	return {
		a: 42,
		b: "foo"
	};
}

var { a, b } = getData();

console.log( a, b );	// 42 "foo"