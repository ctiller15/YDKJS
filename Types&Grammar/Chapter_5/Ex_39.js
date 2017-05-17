// An example of right-associativity:

true ? false : true ? true : true;		// false

true ? false : (true ? true : true);	// false
(true ? false : true) ? true : true;	// true