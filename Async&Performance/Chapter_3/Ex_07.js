// Multiple separate parts of the code can be given event listening capability.
// They can all independently be notified of when foo(..) completes to perform subsequent steps after its completion:

var evt = foo( 42 );

// let `bar(..)` listen to `foo(..)`'s completion'

bar( evt );

// also, let `baz(..)` listen to `foo(..)`'s completion
baz(evt);