// Consider a set of defaults in a nested object structure:

// taken from http://es-discourse.com/t/partial-default-arguments/120/7

var defaults = {
	options: {
		remove: true,
		enable: false,
		instance: {}
	},
	log: {
		warn: true.
		error: true
	}
};

// Now, let's say you have an object called confi...

var config = {
	options: {
		remove: false,
		instance: null
	}
};

// You can do this manually, as you may have in the past:

config.options = config.options || {};
config.options.remove = (config.options.remove !== undefined) ?
	config.options.remove : defaults.options.remove;
config.options.enable = (config.options.enable !== undefined) ?
	config.options.enable : defaults.options.enable;
...

// Some may prefer the assign-overwrite approach:

config = Object.assign( {}, defaults, config );

// Looks nice, but just copies the object reference.