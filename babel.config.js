var presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "modules": "umd"
    }
  ],
  [
    "@babel/preset-react"
  ]
]

var plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-class-properties"
]

module.exports = { presets, plugins }
