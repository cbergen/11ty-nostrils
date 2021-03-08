module.exports = function (config) {

    config.setUseGitIgnore(false);

    config.addPassthroughCopy({ 'static/images': '/images' });
    config.addPassthroughCopy({ 'static/js': '/js' });

    if (process.env.NODE_ENV === 'dev') {
        config.addPassthroughCopy({ 'static/css': '/css' });
    }

    return {
        templateFormats: ['md', 'html'],
        dir: {
            input: 'views',
        }
    }
}