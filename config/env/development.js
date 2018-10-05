const local = require('../local.js');
module.exports = {
  PORT: 3009,
  HOST: '192.168.1.22'/*ip.address()*/,
  URI: false,
  MODEL_START: 'safe',
  FIXTURES: true,
  SECRET_PUSH_KEY: local.SECRET_PUSH_KEY
}
