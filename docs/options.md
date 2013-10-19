## props
Type: `Object`
Default value: `undefined`

Extend YAML front matter with given properties. Example:

## mock
Type: `Object`
Default value: `undefined`

Extend YAML front matter with generated random data, based on a defined template model. See [datafixture.js](https://github.com/acatl/datafixture.js) for the full list of options.

## sort
Type: `Boolean`
Default value: `false`

Alphabetically sort the properties in the specified YAML front matter.

## strip
Type: `Boolean`
Default value: `false`

Strip all YAML front matter from the given pages. 


# Usage Examples

## props
Extend YAML front matter in the given pages with any number of custom properties. 

```js
grunt.initConfig({
  {%= _.shortname(name) %}: {
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

## mock data

```js
grunt.initConfig({
  {%= _.shortname(name) %}: {
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

