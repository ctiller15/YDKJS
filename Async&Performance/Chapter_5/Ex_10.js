// A "heap" is likely a typed ArrayBuffer, such as:

var heap = new ArrayBuffer( 0x10000 );	// 64k heap

// the heap buffer could be used inside the module to back an array of 64-bit float values like this:

var arr = new Float64Array( heap );