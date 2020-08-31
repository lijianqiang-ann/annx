module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "import",
      {
        "libraryName": "@lijianqiang01/anned",
        "libraryDirectory": "./dist/lib",
        "style": name => `${name}/index.css`
      }
    ]
  ]
}
