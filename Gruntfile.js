module.exports = function (grunt) {
  // Configuration
  grunt.initConfig({
    // pass in options to plugins, references to files etc
  })

  // Load Plugins

  // Register tasks which need to be run
  grunt.registerTask('run', function () {
    console.log('I am running');
  })

  grunt.registerTask('sleep', function () {
    console.log('I am sleeping');
  })

  grunt.registerTask('all', ['sleep', 'run']);
}