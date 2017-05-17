// catch(..) takes only the rejection callback as a parameter, and automatically substitutes the default fulfillment callback.
// Equivalent to then(null,..)

p.then( fulfilled );
p.then( fulfilled, rejected );
p.catch( rejected );	// or `p.then( null, rejected )`