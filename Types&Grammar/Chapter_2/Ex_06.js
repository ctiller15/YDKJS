// one common way to make array-like conversions is to borrow the slice(..) utility.

function foo() {
	var arr = Array.prototype.slice.call( arguments );
	arr.push( "bam" );
	console.log( arr );
}

foo( "bar", "baz" );	// [ "bar","baz","bam"]