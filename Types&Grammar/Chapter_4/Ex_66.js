// The corner cases around falsy value comparisons:

"0" == null;			// false
"0" == undefined;		// false
"0" == false;			// true -- WHAT!?!?
"0" == NaN;					// false
"0" == 0;					// true
"0" == "";					// false

false == null;			// false
false == undefined;		// false
false == NaN;			// false
false == 0;					// true -- OOHHHH NOOOOO!
false == "";			// true -- NOOOOOOO!
false == [];			// true --- AAAAAAGH!
false == {};			// false

"" == null;				// false
"" == undefined;		// false
"" == NaN;				// false
"" == 0;				// true -- *GASP*
"" == [];				// true -UH-OH!
"" == {};				// false

0 == null;				// false
0 == undefined;			// false
0 == NaN;				// false
0 == [];				// true -- GUGHK!
0 == {};				// false
