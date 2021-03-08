module.exports = function (config) {
	// JavaScript that's compiled by TypeScript
	config.addPassthroughCopy({ "_static/js": "/js" });


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
