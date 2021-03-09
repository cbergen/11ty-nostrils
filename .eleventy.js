const img = require("./shortcodes/img.js");

module.exports = function (config) {
	config.addShortcode("img", img);

	config.setUseGitIgnore(false);
	// config.setWatchThrottleWaitTime(150); // in milliseconds

	// JavaScript that's compiled by SWC/spack
	// config.addWatchTarget("source/js/*.js");
	// config.addPassthroughCopy({ "source/js/*.js": "/js" });

	// Images compiled by "img" shortcode
	config.addPassthroughCopy({ "_static/images/*": "/images" });

	// Images not compiled at all
	// config.addPassthroughCopy({ "source/images/*": "/images" });

	if (process.env.NODE_ENV === "dev") {
		// Use uncompiled CSS in dev
		config.addPassthroughCopy({ "source/css": "/css" });
	} else {
		config.addPassthroughCopy({ "_static/css": "/css" });
	}

	return {
		templateFormats: ["md", "html", "js"],
		dir: {
			input: "source",
		},
	};
};
