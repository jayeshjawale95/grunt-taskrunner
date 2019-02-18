const sass = require('node-sass');

module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'build/styles.css'
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'build/css/styles.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: 'build/scripts.js',
          dest: 'build/scripts.js'
        }]
      }
    }
  })

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-sass');

  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register tasks which need to be run
  grunt.registerTask('concat-js', ['concat:js']);

  grunt.registerTask('concat-css', ['concat:css']);

} 