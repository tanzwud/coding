'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // metadata .
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            /* can be set for every module */
            gruntautomation: {
                src: ['gruntautomation/*.js']
            }
        },
        /* configure watcher */
        watch: {
            gruntfile: {
                files: ['gruntautomation/*.html', 'gruntautomation/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.registerTask('Hello', 'say hello', function () {
        grunt.log.writeln('Hello from grunt');
    });

    // These plugins provide tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'hello']);
};