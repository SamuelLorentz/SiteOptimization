module.exports = function (grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'home.html', dest: 'assets/css/style.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'assets/css/style.css', dest: 'assets/css/style.css' }
                ]
            }
        },
        uglify: {
            my_target: {
              files: [
                { src: 'assets/js/analytics.js', dest: 'assets/js/analytics.js' },
                { src: 'assets/js/comment-reply.min.js', dest: 'assets/js/comment-reply.min.js' },
                { src: 'assets/js/jquery-1.12.4.js', dest: 'assets/js/jquery-1.12.4.js' },
                { src: 'assets/js/jquery-1.4.1-migrate.min.js', dest: 'assets/js/jquery-1.4.1-migrate.min.js' },
                { src: 'assets/js/jquery.form.min.js', dest: 'assets/js/jquery.form.min.js' },
                { src: 'assets/js/tagdiv_theme.min.js', dest:  'assets/js/tagdiv_theme.min.js' },
                { src: 'assets/js/wp-embed.min.js', dest: 'assets/js/wp-embed.min.js' },
                { src: 'assets/js/wp-emoji-release.min.js', dest: 'assets/js/wp-emoji-release.min.js' }
                    ]
              }
            }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin','uglify']);
};