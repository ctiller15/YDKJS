// A label can apply to a non-loop block.
// only break can referene such a non-loop label.
// You can do a labeled break __ out of any labeled block, but you cannot continue __
// a non-loop label, nor can you do a non-labeled break out of a block.

function foo() {
	// `bar` labeled-block
	bar: {
		console.log( "Hello" );
		break bar;
		console.log( "never runs" );
	}
	console.log( "World" );
}

foo();
// Hello
// World