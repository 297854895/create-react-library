var chokidar = require('chokidar')
var fs = require('fs-extra')
var path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
// listen style change
chokidar.watch(
  './src/ui',
  {
    ignored: /(^|[\/\\])\../
  }
).on(
    'all',
    function(event, path) {
      if (event === 'change') {
        fs.copySync(resolveApp(path), resolveApp('lib' + path.substr(3)), {
          dereference: true,
          filter: path => path
        })
      }
    }
)
