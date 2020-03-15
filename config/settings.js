require('dotenv').config();
const { dirname } = require('path');
const env = require('env-var');

module.exports = Object.freeze({
  BASE_PATH: dirname(__dirname),
  PORT: env.get('AUTH_API_PORT').asIntPositive() || 4000
});
