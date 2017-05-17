// Even more nuanced differences exist with other value combinations:

true ? false : true ? true : true;		// false

true ? false : (true ? true : true);	// false
(true ? false : true) ? true : false;	// false

// that implies thr grouping is moot. But...

var a = true, b = false, c = true, d = true, e = false;

a ? b : (c ? d : e);	// false, evaluates only `a` and `b`
(a ? b : c) ? d : e;	// false, evaluates `a`, `b` AND `e`