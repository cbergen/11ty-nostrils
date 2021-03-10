const img = require("./shortcodes/img.js");

module.exports = function (config) {
	config.addShortcode("img", img);

	config.setUseGitIgnore(false);

	config.addPassthroughCopy({ "source/images/*": "/images" }); // uncompiled
	config.addPassthroughCopy({ "_static/images/*": "/images" }); // compiled

	if (process.env.NODE_ENV === "dev") {
		config.addPassthroughCopy({ "source/css": "/css" }); // uncompiled
	} else {
		// Compiled CSS is output directly to the build directory with PostCSS
	}

	return {
		templateFormats: ["md", "html", "js"],
		dir: {
			input: "source",
		},
	};
};
