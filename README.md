# grunt-matter [![NPM version](https://badge.fury.io/js/grunt-matter.png)](http://badge.fury.io/js/grunt-matter)  [![Build Status](https://travis-ci.org/assemble/grunt-matter.png)](https://travis-ci.org/assemble/grunt-matter)

> Add, extend, sort or strip YAML front matter. Also has options for populating randomized mock data.

Visit [Assemble's documentation](http://assemble.io) for many more examples and pointers on getting started.

## Getting Started
#### Overview
In your project's Gruntfile, add a section named `matter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  matter: {
    options: {
      // Task-specific options go here.
    },
    target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```



## Options
### props
Type: `Object`
Default value: `undefined`

Extend YAML front matter with given properties. Example:

### mock
Type: `Object`
Default value: `undefined`

Extend YAML front matter with generated random data, based on a defined template model. See [datafixture.js](https://github.com/acatl/datafixture.js) for the full list of options.

### sort
Type: `Boolean`
Default value: `false`

Alphabetically sort the properties in the specified YAML front matter.

### strip
Type: `Boolean`
Default value: `false`

Strip all YAML front matter from the given pages. 


## Usage Examples

### props
Extend YAML front matter in the given pages with any number of custom properties. 

```js
grunt.initConfig({
  matter: {
    options: {
      props: {
        foo: 'One',
        bar: 'Two',
        someObj: {
          baz: 'Lorem'
        }
      }
    },
    files: {}
  }
});
```

### mock data

```js
grunt.initConfig({
  matter: {
    options: {
      mock: {
        "lorem": "lorem"
        values: "0...100:2", 
        names: ["Ian",2, 10.4, true, "Andros"], 
        complex: {
          PO:"20000...30000",
          country: ["Mexico", "Canada", "US"]
        }
      }
    },
    files: {}
  }
});
```




## Author

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Mon Sep 02 2013 09:44:51._
