module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', 'test')

  grunt.registerTask('test', 'mocha');
  grunt.registerTask('mocha', 'simplemocha');

  grunt.initConfig({

    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    },

    watch: {
      test: {
        files: ['src/**/*', 'test/**/*'],
        tasks: 'test'
      }
    }

  });

};