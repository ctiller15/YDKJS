// Browser dev consoles vary on how they represent the array behavior.

var a = new Array( 3 );
console.log( a.length );	// 3
console.log( a );	// [ , ,  ]

// in chrome it gives "undefined" x 3.