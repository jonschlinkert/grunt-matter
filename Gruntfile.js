/*
 * grunt-matter
 * https://github.com/assemble/grunt-matter
 *
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    config: {
      fixtures: 'test/fixtures',
      actual: 'test/actual'
    },


    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/*.js', 'test/*.js']
      }
    },


    matter: {
      // Extend existing YAML front matter with new properties
      extend_yfm: {
        options: {
          props: {
            aaa: 'Alpha',
            bbb: 'Beta'
          }
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.fixtures %>',
            src: ['**/*.hbs'],
            dest: '<%= config.actual %>/extended/',
            ext: '.hbs'
          }
        ]
      },
      mock_date: {
        options: {
          mock: {
            "lorem": "lorem"
          }
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.fixtures %>',
            src: ['**/*.hbs'],
            dest: '<%= config.actual %>/mock_data/',
            ext: '.hbs'
          }
        ]
      },
      sort_yfm: {
        options: {
          sort: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.fixtures %>',
            src: ['**/*.hbs'],
            dest: '<%= config.actual %>/sorted/',
            ext: '.hbs'
          }
        ]
      },
      add_yfm: {
        options: {
          props: {
            apple: 'Fruit',
            carot: 'Vegetable'
          }
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.fixtures %>',
            src: ['**/*.hbs'],
            dest: '<%= config.actual %>/added/',
            ext: '.hbs'
          }
        ]
      },
      strip_yfm: {
        options: {strip: true},
        files: [
          {
            expand: true,
            cwd: '<%= config.fixtures %>',
            src: ['**/*.hbs'],
            dest: '<%= config.actual %>/stripped/',
            ext: '.hbs'
          }
        ]
      }
    },

    // Run mocha tests.
    mochaTest: {
      files: ['test/test.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'nyan'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['matter', 'mochaTest']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'test', 'readme']);
};
