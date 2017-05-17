// "," has the lowest precedence.

if (str && (matches = str.match( /[aeiou]/g ))) {
	// ..
}

// && has higher precedence than =.