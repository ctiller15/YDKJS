// Be careful about creating "sparse" arrays.

var a = [ ];

a[0] = 1;
// no `a[1]` slot set here.
a[2] = [ 3 ];

a[1];		// undefined

a.length;	// 3