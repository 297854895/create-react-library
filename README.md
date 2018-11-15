# create-react-library
## usage
```shell
yarn dev
yarn build

npm run dev
npm run build
```

```js
// babel plugins
[
  require.resolve('create-react-library/lib/utils/import-style'),
  {
    library: 'create-react-library',
    lib: 'lib',
    style: {
      type: 'less'
    }
  }
]

// support less theme diy

const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themer = lessToJs(fs.readFileSync(path.join(__dirname, 'theme.less'), 'utf8'));

...

{
  test: /\.less/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'less-loader',
      options: {
        modifyVars: themer
      }
    }
  ]
}
```
