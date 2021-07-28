/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  extends: '../babel.config.js',
  plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
}
