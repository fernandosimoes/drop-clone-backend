const md5 = require('md5');

const jwtConfig = {
  securityToken: md5(`${process.env.SECURITY_TOKEN}`) || `${md5(`devtoken`)}`,
  expiresIn: '30 days'
}

module.exports = jwtConfig;