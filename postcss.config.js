const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssImport(),
        postcssPresetEnv(),
        cssnano(),
    ],
};