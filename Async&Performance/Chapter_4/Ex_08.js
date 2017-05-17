// yield .. and next(..) pair together as a two-way message passing system
// during the execution of the generator.

// only looking at the iterator code:

var res = it.next();	// first `next()`, don't pass anything
res.value;						// "Hello"

res = it.next( 7 );		// pass `7` to waiting `yield`
res.value;					// 42