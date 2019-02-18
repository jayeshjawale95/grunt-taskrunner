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
    }
  })

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register tasks which need to be run
  grunt.registerTask('concat-js', ['concat:js']);

  grunt.registerTask('concat-css', ['concat:css']);

}