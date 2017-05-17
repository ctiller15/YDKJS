// How can we use multiple generators concurrently?

// `request(..)` is a Promise-aware Ajax utility

var res = [];

function *reqData(url) {
	res.push(
		yield request( url )
	);
}