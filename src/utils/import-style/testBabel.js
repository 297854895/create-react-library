var path = require('path');

var babel = require('@babel/core');

babel.transformFile('./test.js', {
  presets: [["@babel/env", {
    modules: false
  }]],
  plugins: [[path.resolve('index.js'), {
    library: 'test',
    lib: 'dist' // style: {
    //   type: 'css',
    //   path: 'ui'
    // }

  }]]
}, function (err, res) {
  console.log(err);
  if (res) {
    console.log(res.code);
  }
});
