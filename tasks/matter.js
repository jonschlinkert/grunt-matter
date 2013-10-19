/**
 * grunt-matter
 * http://github.com/jonschlinkert/grunt-matter
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

// node_modules
var datafixtures = require('datafixture.js');
var yfm = require('assemble-yaml');

module.exports = function (grunt) {

  var _ = grunt.util._;

  grunt.registerMultiTask('matter', 'Add, extend, sort or strip YAML front matter.', function () {

    var options = this.options({});

    this.files.forEach(function (f) {
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      var mockData = datafixtures.generate(options.mock || {}, 0);
      options.props = _.extend({}, mockData, options.props);

      src.map(function (file) {
        if(options.strip) {
          grunt.file.write(f.dest, yfm.strip(file).replace(/^\s*/, ''));
        }
        if(options.props && _.isObject(options.props)) {
          grunt.file.write(f.dest, yfm.extend(file, options));
        }
        if (file.length < 1) {
          grunt.log.warn('Destination not written because file was empty.');
        } else {
          grunt.log.ok('File '.yellow + f.dest + ' was updated.');
        }
      });

    });

  });

};
