/**
 * grunt-matter
 * http://github.com/jonschlinkert/grunt-matter
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

// node_modules
var datafixtures = require('datafixture.js');
var yfm = require('assemble-yaml');
var frep = require('frep');


module.exports = function (grunt) {

  // Grunt utils.
  var _ = grunt.util._;
  var async = grunt.util.async;


  grunt.registerMultiTask('matter', 'Add, extend, sort or strip YAML front matter.', function () {
    var done = this.async();
    var options = this.options({});

    var mockData = datafixtures.generate(options.mock || {}, 0);

    this.files.forEach(function (fp) {

      var src = fp.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      async.forEach(src, function (src, next) {

        options.props = _.extend({}, mockData, options.props) || {};
        options.props.name = path.basename(String(src), path.extname(src));
        options.props.dirname = path.basename(path.dirname(String(src)));

        var context = yfm.extend(src, options);

        if (options.props && _.isObject(options.props)) {
          grunt.file.write(fp.dest, context.replace(/^\s*/, '').replace(/(---)\s*/g, '$1\n'));
        }
        if (options.strip) {
          grunt.file.write(fp.dest, yfm.strip(src).replace(/^\s*/, ''));
        }
        if (src.length < 1) {
          grunt.log.warn('Destination was not written because file was empty.');
        } else {
          grunt.log.ok('File '.yellow + fp.dest + ' was updated.');
        }
        next();
      });
    });
    done();

  });
};
