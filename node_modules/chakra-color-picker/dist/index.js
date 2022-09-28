
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./chakra-color-picker.cjs.production.min.js')
} else {
  module.exports = require('./chakra-color-picker.cjs.development.js')
}
