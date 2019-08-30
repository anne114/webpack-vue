const env = process.env.NODE_ENV;
if (env === 'production') {
  module.exports = require('./build/pro');
} else if (env === 'test') {
  module.exports = require('./build/test');
} else {
  module.exports = require('./build/dev');
}
