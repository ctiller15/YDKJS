// This is how you'd send a Transferable Object using postMessage(..) :

// `foo` is a `Uint8Array` for instance

postMessage( foo.buffer, [ foo.buffer ] );

// first param is the raw buffer.
// second is a list of what to transfer.