const path = require('path');
const buble = require('@rollup/plugin-buble');
const beep = require('@rollup/plugin-beep');

const resolve = function(filePath) {
  return path.join(__dirname, filePath)
}

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'iife'
  },
  plugins: [
    beep(),
    buble()
  ],
}