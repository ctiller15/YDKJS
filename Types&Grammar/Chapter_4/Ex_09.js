// A third optional argument can be passed to JSON.stringify(..), called space.
// (It's indentation.)
var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};

console.log(JSON.stringify( a, null, 3 ));
// {
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }

console.log(JSON.stringify( a, null, "-----" ));
// {
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }