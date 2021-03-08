const img = require("./shortcodes/img.js");

module.exports = function (config) {
	config.addShortcode("img", img);

	// JavaScript that's compiled by TypeScript
	config.addPassthroughCopy({ "_static/js": "/js" });

	// Images compiled by "img" shortcode
	config.addPassthroughCopy({ "_static/images/*": "/images" });

	// Images not compiled at all
	config.addPassthroughCopy({ "source/images/*": "/images" });

	if (process.env.NODE_ENV === "dev") {
		// Use uncompiled CSS in dev
		config.addPassthroughCopy({ "source/css": "/css" });
	} else {
		config.addPassthroughCopy({ "_static/css": "/css" });
	}

	return {
		templateFormats: ["md", "html"],
		dir: {
			input: "source",
		},
	};
};
