const Image = require("@11ty/eleventy-img");

module.exports = async function (url, formats, widths, sizes = "", cls = "", alt = "") {
    // formats must be an array
    formats = formats.split(",");

    // widths must be an array
    widths = widths.split(",");

    // if widths.length > 1, then we need a sizes string
    if (widths.length > 1 && sizes.length === 0) {
        widths = [widths[0]];
    }

    const metadata = await Image(url, {
        widths,
        formats,
        urlPath: "/images/",
        outputDir: "./build/images/",
        useCache: false,
        sharpJpegOptions: {
            quality: 85,
        },
    });

    const imageAttributes = {
        sizes,
        class: cls,
        alt,
        loading: "lazy",
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline",
    });
};
