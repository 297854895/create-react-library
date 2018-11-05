var import_theme = false

module.exports = function(babel, config) {
  config.style = {
    type: 'css',
    path: 'ui',
    ...config.style
  }
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path, _ref) {
        var node = path.node,
            library_name = config.library,
            lib = config.lib,
            init_path = node.source.value.split('/')
        if (init_path.length !== 2) return
        var module_path = init_path[1],
            style_arr = config.style.path || ['ui'],
            t = babel.types
        if (!node) return
        var full_path = library_name + '/' + lib + '/' + module_path,
            dist_path = t.stringLiteral(full_path),
            push_value = null
        path.node.specifiers.forEach(specifier => {
          var diy_name = specifier.local.name,
              module_name = [t.ImportDefaultSpecifier(t.identifier(diy_name || specifier.imported.name))],
              source = node.source.value
          if (!specifier.imported || source.substr(0, library_name.length) !== library_name ) {
            if (node.specifiers.length > 1) {
              if (push_value === node.source.value) return
              path.insertBefore(node)
              push_value = node.source.value
              return
            }
            push_value = null
            path.insertBefore(node)
            return
          }
          var insert_module = t.ImportDeclaration(module_name,  t.stringLiteral(full_path + '/' + specifier.imported.name))
          path.insertBefore(insert_module)
          if (module_path !== config.style.path) return
          if (!import_theme) {
            path.insertBefore(t.importDeclaration([], t.stringLiteral(full_path + '/style/index.' + config.style.type)))
            import_theme = true
          }
          var w_path = t.stringLiteral(full_path + '/' + specifier.imported.name + '/style/index.' + config.style.type)
          path.insertBefore(t.importDeclaration([], w_path))
        })
        path.remove()
      }
    }
  }
}
