module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // http://stackoverflow.com/questions/16339595/how-do-i-configure-different-environments-in-angular-js
        ngconstant: {
            options: {
                name: 'config',
                wrap: '\'use strict\';\n\n{%= __ngModule %}',
                space: '  '
            },
            development: {
                options: {
                    dest: './client/src/config.js'
                },
                constants: {
                    api: {
                        domain: 'http://jsonplaceholder.typicode.com',
                        album: '/albums/:id'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['ngconstant:development']);
};