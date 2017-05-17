// We still have some of the implementation plumbing work to do,
// receive and wire up the yielded promie so that it resumes
// the generator upon resolution.
// Start by trying it manually:

var it = main();

var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
	function(text){
		it.next( text );
	},
	function(err){
		it.throw( err );
	}
);