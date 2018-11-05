# Usage

```js
// babel plugins add
plugins: [
  [
    path.resolve('create-react-library/utils/import-file/index.js'),
    {
      library: 'create-react-library',
      lib: 'dist',
      // will import [libraryName]/ui/[componentName]/index.[style.type]
      // will import theme style [libraryName]/ui/style/index.[style.type]
      // type can config css or less etc.
      // default:
      style: {
        type: 'css',
        path: 'ui'
      }
    }
  ]
]
```
