var path = require('path');

var babel = require('@babel/core');

babel.transformFile('./test.js', {
  presets: [["@babel/env", {
    modules: false
  }]],
  plugins: [[path.resolve('index.js'), {
    library: 'create-react-library',
    lib: 'lib'
  }]]
}, function (err, res) {
  console.log(err);
  if (res) {
    console.log(res.code);
  }
});
