// Let's imagine if ES6 object destructuring with defaults can help at all:

config.options = config.options || {};
config.log = config.log || {};
({
		options: {
			remove: config.options.remove = defaults.options.remove,
			enable: config.options.enable = defaults.options.enable,
			instance: config.options.instance = defaults.options.instance
		} = {},
		log = {
				warn: config.log.warn = defaults.log.warn,
				error: config.log.error = defaults.log.error
		} = {}
} = config);

// Still verbose and repetitive.