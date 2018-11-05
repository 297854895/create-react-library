var fs = require('fs-extra')
var path = require('path')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

try {
  fs.readdir(resolveApp('src/ui'), function(err, files) {
    if (err) {
      console.log(err)
    } else {
      files.forEach(function(fileName) {
        var path = '/ui/'+ fileName + (fileName === 'style' ? '' : '/style')
        fs.copySync(resolveApp('src' + path), resolveApp('dist' + path), {
          dereference: true,
          filter: path => path
        })
      })
    }
  })
} catch (e) {
  console.log(e)
}
